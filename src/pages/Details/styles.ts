import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    min-height: 100vh;
    height: 100vh;
`;

export const AvatarWrap = styled.div`
  width: 100%;
  padding: 0px 45px;
  position: relative;
  height: 45px;
  text-align: center;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  position: relative;
  height: 150px;
  align-self: center;
  bottom: 75px;
`;
export const PokemonName = styled.h2`
  position: relative;
  font-family: 'VisbyCF Extra';
  color: ${ThemeColors.white};
  margin: 0px;
  margin-left: 55px;
  bottom: 35px;
  font-size: 18px;
  text-transform: capitalize;
  text-align: left;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0px 25px;
`;
