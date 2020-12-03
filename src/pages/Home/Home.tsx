import React, { useEffect, useState } from 'react';
import { Header, PokeCard, PokePagination, SearchBar } from 'components';
import { Container } from './styles';
import styled from 'styled-components';
import { useFetch } from 'hooks/usefecth';
import Lottie from 'lottie-react';
import cardAnimation from 'assets/animations/card.json';

const CardGrid = styled.div`
  position: relative;
  top: -200px;
  display: flex;
  flex-wrap: wrap;
  width: calc(90%);
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 500px) {
    top: -100px;
  }
`;

const Content = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  padding: 0px 25px;
`;

const CardGridSkeleton = () => {
  return (
    <CardGrid>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <div style={{ width: 300, flexGrow: 1 }} key={index}>
            <Lottie animationData={cardAnimation} />
          </div>
        ))}
    </CardGrid>
  );
};

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const Home = () => {
  const [pageSize, setPageSize] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(`${BASE_URL}?limit=12&offset=0`);
  const { data, error, isValidating } = useFetch(fetchUrl);

  const setPage = ({ selected }) => {
    setFetchUrl(`${BASE_URL}?limit=12&offset=${selected * 9}`);
  };

  useEffect(() => {
    if (!pageSize || data?.count !== pageSize) {
      setPageSize(Math.abs(data?.count / 9));
    }
  }, [data, pageSize]);

  return (
    <Container>
      <Header>
        <SearchBar placeholder="Procurar pokémon pelo nome..." />
      </Header>
      <Content>
        {data ? (
          <CardGrid>
            {data?.results?.map((item: any) => (
              <PokeCard fetchUrl={item.url} key={item.url} />
            ))}
          </CardGrid>
        ) : (
          <CardGridSkeleton />
        )}
        <PokePagination count={pageSize} onPageChange={setPage} />
      </Content>
    </Container>
  );
};

export default Home;
