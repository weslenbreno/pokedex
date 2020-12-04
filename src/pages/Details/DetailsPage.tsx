import React from 'react';
import { Header } from 'components';
import { Container, Avatar, AvatarWrap, Content, PokemonName } from './styles';
import useFetch from 'hooks/useFecth';
import { useParams } from 'react-router-dom';
import { ThemeColors, TypesColors } from 'shared/constants/Colors';
import Stats from './Stats/Stats';
import Evolutions from './Evolutions/Evolutions';
import { addFallbackImage } from 'utils/functions';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const Details = () => {
  let { id } = useParams();
  const { data } = useFetch(`${BASE_URL}/${id}`);

  return (
    <Container>
      <Header
        bgColor={TypesColors[data?.types[0]?.type?.name] || TypesColors.default}
        logoColor={ThemeColors.white}
        height={'fit-content'}
      >
        <AvatarWrap>
          <PokemonName>
            {data?.name}
            <small>{`  #${data?.id} `}</small>
          </PokemonName>
          <Avatar
            onError={(event) => addFallbackImage(event, data)}
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt="pokemon"
          />
        </AvatarWrap>
      </Header>
      <Content>
        <Stats data={data} />
        <Evolutions pokemon={data} />
      </Content>
    </Container>
  );
};

export default Details;
