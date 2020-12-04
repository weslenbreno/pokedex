import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';

export const Card = styled.div`
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
export const CardBody = styled.div`
  padding: 25px;
  padding-bottom: 50px;

  h2 {
    font-family: 'SF Pro Black';
    font-size: 18px;
    text-transform: capitalize;
  }
`;

export const PokeID = styled.span`
  font-family: 'SF Pro SemiBold';
  font-size: 18px;
  color: ${ThemeColors.darkGrey};
`;

export const CardFooter = styled.div`
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

export const FooterBtn = styled.button`
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  span {
    font-family: 'SF Pro Medium';
    color: ${(props) => props.color || ThemeColors.lightBlue};
    font-size: 14px;
  }
  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const PokeTypes = styled.span`
  background-color: ${ThemeColors.bg};
  padding: 5px 20px;
  border-radius: 25px;
  font-family: 'SF Pro Light';
  font-size: 13px;
  margin-right: 8px;
`;

export const PokeImg = styled.img`
  position: absolute;
  top: -35px;
  right: 35px;
  height: 90px;
`;