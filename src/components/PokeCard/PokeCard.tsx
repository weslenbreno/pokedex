import React from 'react';
import Lottie from 'lottie-react';
import cardAnimation from 'assets/animations/card.json';
import useFetch from 'hooks/useFecth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPokemonToFavorites, removePokemonFromFavorites } from 'store/ducks/pokedex';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { addFallbackImage } from 'utils/functions';

import { Card, CardBody, CardFooter, FooterBtn, PokeID, PokeImg, PokeTypes } from './styles';

import starImg from 'assets/images/star.svg';
import addImg from 'assets/images/add.svg';

type Props = {
  fetchUrl: string;
};

const PokeCard: React.FC<Props> = ({ fetchUrl }) => {
  const match = fetchUrl.match(/\/pokemon\/(\d+)\//);
  const id = match ? match[1] : 0;
  const history = useHistory();
  const { data } = useFetch(fetchUrl);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.app.favorites);

  const addToFavorite = () => {
    dispatch(addPokemonToFavorites(data));
  };

  const removeFromFavorite = () => {
    dispatch(removePokemonFromFavorites(data));
  };

  return (
    <>
      {data ? (
        <Card>
          <PokeImg
            onError={(event) => addFallbackImage(event, data)}
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          />
          <CardBody>
            <PokeID># {id}</PokeID>
            <h2>{data?.name}</h2>
            {data?.types.map(({ type }: any) => (
              <PokeTypes key={type?.name}>{type.name}</PokeTypes>
            ))}
          </CardBody>
          <CardFooter>
            {!favorites?.some((item: any) => item?.id === data?.id) ? (
              <FooterBtn type="button" onClick={addToFavorite}>
                <img src={addImg} height={22} alt="Star" />

                <span>Favoritar</span>
              </FooterBtn>
            ) : (
              <FooterBtn type="button" onClick={removeFromFavorite}>
                <img src={starImg} height={22} alt="Star" />
                <span>Desfavoritar</span>
              </FooterBtn>
            )}
            <FooterBtn onClick={() => history.push(`/detail/${id}`)}>
              <span>Detalhes</span>
            </FooterBtn>
          </CardFooter>
        </Card>
      ) : (
        <div>
          <Lottie animationData={cardAnimation} />
        </div>
      )}
    </>
  );
};

export default PokeCard;
