import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import egg from 'assets/images/egg.png';
import Lottie from 'lottie-react';
import cardAnimation from 'assets/animations/card.json';
import { Link } from 'react-router-dom';
import { useFetch } from 'hooks/usefecth';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  background-color: ${ThemeColors.white};
  border-radius: 30px;
  margin: 25px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.16);
  @media (max-width: 800px) {
    flex-grow: 1;
  }
`;
const CardBody = styled.div`
  padding: 25px;
  padding-bottom: 50px;

  h2 {
    font-family: 'SF Pro Black';
    font-size: 18px;
    text-transform: capitalize;
  }
`;

const PokeID = styled.span`
  font-family: 'SF Pro SemiBold';
  font-size: 18px;
  color: ${ThemeColors.darkGrey};
`;

const CardFooter = styled.div`
  background-color: ${ThemeColors.bg};
  border-radius: 0px 0px 30px 30px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.16);
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  padding: 0px 25px;
`;

const FooterBtn = styled(Link)`
  text-decoration: none;
  span {
    font-family: 'SF Pro Medium';
    color: ${ThemeColors.lightBlue};
    font-size: 14px;
  }
`;

const PokeTypes = styled.span`
  background-color: ${ThemeColors.bg};
  padding: 5px 20px;
  border-radius: 25px;
  font-family: 'SF Pro Light';
  font-size: 13px;
  margin-right: 8px;
`;

const PokeImg = styled.img`
  position: absolute;
  top: -35px;
  right: 35px;
  height: 90px;
`;

type Props = {
  fetchUrl: string;
};

const PokeCard: React.FC<Props> = ({ fetchUrl }) => {
  const match = fetchUrl.match(/\/pokemon\/(\d+)\//);
  const id = match ? match[1] : 0;

  const { data } = useFetch(fetchUrl);

  const addFallbackImage = (event: any) => {
    event.target.src = data?.sprites?.front_default || egg;
  };

  return (
    <>
      {data ? (
        <Card>
          <PokeImg
            onError={addFallbackImage}
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          />
          <CardBody>
            <PokeID># {id}</PokeID>
            <h2>{data?.name}</h2>
            {data?.types.map(({ type }: any) => (
              <PokeTypes key={type.name}>{type.name}</PokeTypes>
            ))}
          </CardBody>
          <CardFooter>
            <FooterBtn>
              <span>Favoritar</span>
            </FooterBtn>
            <FooterBtn to={`/detail/${id}`}>
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
