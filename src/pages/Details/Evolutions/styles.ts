import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';

export const Container = styled.h3`
  padding: 0px 25px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 50px 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-family: 'VisbyCF DemiBold';
  color: ${ThemeColors.darkGrey};
  margin: 0;
  margin-right: 25px;
`;
export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const PokeImg = styled.img`
  height: 100px;
`;

export const EvoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 25px;

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
  }

  span {
    margin: 15px 0px;
    font-family: 'VisbyCF Demibold';
    font-size: 16px;
  }
`;

export const EvoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
    flex-grow: 1;
  }

  & > span {
    font-family: 'VisbyCF Demibold';
    font-size: 16px;
    text-align: center;
    padding: 10px 0px;
    color: ${ThemeColors.lightBlue};
  }
`;
