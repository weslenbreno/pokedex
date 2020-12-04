import styled from 'styled-components';
import { ThemeColors } from 'shared/constants/Colors';

export const Container = styled.div`
    flex: 1;
    min-height: 100vh;
    height: 100vh;
`;

export const BarWraper = styled.div`
  width: 40%;
  min-width: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  bottom: 25px;
  
  @media (max-width: 750px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    justify-content: center;
    bottom: 0px;
  }
`;

export const CardGrid = styled.div`
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

export const NotFound = styled.h5`
  font-size: 22px;
  font-family: 'VisbyCF DemiBold';
`;

export const Title = styled.div`
  text-align: center;
  font-size: 22px;
  font-family: 'VisbyCF DemiBold';
  h2 {
    font-family: 'SF Pro SemiBold';
    color: ${ThemeColors.white};
    margin: 0;
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  padding: 0px 25px;
`;