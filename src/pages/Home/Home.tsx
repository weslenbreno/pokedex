import React, { useCallback, useEffect, useState } from 'react';
import { Header, PokeCard, PokePagination, SearchBar } from 'components';
import { Container, CardGrid, Content, HelperText, BarWraper, NotFound } from './styles';
import useFetch from 'hooks/useFecth';
import CardGridSkeleton from './CardGridSkeleton/CardGridSkeleton';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const Home = () => {
  const [pageSize, setPageSize] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(`${BASE_URL}?limit=12&offset=0`);
  const { data, error, isValidating } = useFetch(fetchUrl);
  const [searchName, setSearchName] = useState('');

  const setPage = ({ selected }) => {
    setActivePage(selected);
    setFetchUrl(`${BASE_URL}?limit=12&offset=${selected * 9}`);
  };

  const globalSearch = useCallback((event: any) => {
    const value = event?.target.value;

    if (value.length <= 2) {
      return setSearchName('');
    }
    setSearchName(value);
    setFetchUrl(`${BASE_URL}?limit=2000`);
  }, []);

  useEffect(() => {
    if (data) {
      setPokemonList(data?.results.filter((pk: any) => pk.name.includes(searchName.toLowerCase())));
    }
  }, [data, searchName]);

  useEffect(() => {
    if (!pageSize || data?.count !== pageSize) {
      if (!searchName) {
        setPageSize(Math.abs(data?.count / 9));
        setPage({ selected: activePage });
      } else {
        setPageSize(Math.abs(pokemonList.length / 9));
      }
    }
  }, [activePage, data, pageSize, pokemonList.length, searchName]);

  return (
    <Container>
      <Header>
        <BarWraper>
          <SearchBar placeholder="Procurar pokémon pelo nome..." onSearch={globalSearch} />
          <HelperText>* Digite pelo menos 3 letras</HelperText>
        </BarWraper>
      </Header>
      <Content>
        {pokemonList.length > 0 && !isValidating ? (
          <CardGrid>
            {pokemonList.map((item: any) => (
              <PokeCard fetchUrl={item.url} key={item.name} />
            ))}
          </CardGrid>
        ) : (
          <>{isValidating ? <CardGridSkeleton /> : <NotFound>Nenhum Pokemon</NotFound>}</>
        )}
        <PokePagination count={pageSize} onPageChange={setPage} />
      </Content>
    </Container>
  );
};

export default Home;
