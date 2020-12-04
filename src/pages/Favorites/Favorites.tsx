import React, { useState, useEffect } from 'react';
import { Header, FavoriteCard, SearchBar } from 'components';
import { Container, CardGrid, NotFound, Content, Title, BarWraper } from './styles';
import { ThemeColors } from 'shared/constants/Colors';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import starImg from 'assets/images/star.svg';

const Favorites = () => {
  const pokemonList = useSelector((state: RootState) => state.app.favorites);
  const [searchName, setSearchName] = useState('');
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    setPokemonData(pokemonList.filter((pk: any) => pk.name.includes(searchName?.toLowerCase())));
  }, [pokemonList, searchName]);

  return (
    <Container>
      <Header
        bgColor={ThemeColors.redHeader}
        logoColor={ThemeColors.white}
        title={
          <Title>
            <img src={starImg} alt="star" height={25} />
            <h2>Favoritos</h2>
          </Title>
        }
      >
        <BarWraper>
          <SearchBar
            placeholder="Procurar pokémon pelo nome..."
            onSearch={(event: any) => setSearchName(event?.target?.value)}
          />
        </BarWraper>
      </Header>
      <Content>
        {pokemonData?.length > 0 ? (
          <CardGrid>
            {pokemonData.map((item: any, index) => (
              <FavoriteCard data={item} key={index} />
            ))}
          </CardGrid>
        ) : (
          <NotFound>Nenhum pokemon</NotFound>
        )}
      </Content>
    </Container>
  );
};

export default Favorites;
