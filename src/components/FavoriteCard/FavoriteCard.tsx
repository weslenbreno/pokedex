import React from 'react';
import Lottie from 'lottie-react';
import cardAnimation from 'assets/animations/card.json';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePokemonFromFavorites } from 'store/ducks/pokedex';
import { addFallbackImage } from 'utils/functions';
import { Card, CardBody, CardFooter, FooterBtn, PokeID, PokeImg, PokeTypes } from './styles';

type Props = {
  data: any;
};

const FavoriteCard: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const removeFromFavorites = () => {
    dispatch(removePokemonFromFavorites(data));
  };

  return (
    <>
      {data ? (
        <Card>
          <PokeImg
            onError={(event) => addFallbackImage(event, data)}
            src={`https://pokeres.bastionbot.org/images/pokemon/${data?.id}.png`}
          />
          <CardBody>
            <PokeID># {data?.id}</PokeID>
            <h2>{data?.name}</h2>
            {data?.types.map(({ type }: any) => (
              <PokeTypes key={type.name}>{type.name}</PokeTypes>
            ))}
          </CardBody>
          <CardFooter>
            <FooterBtn type="button" onClick={removeFromFavorites} color="red">
              <span>Remover</span>
            </FooterBtn>
            <FooterBtn onClick={() => history.push(`/detail/${data?.id}`)}>
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

export default React.memo(FavoriteCard);
