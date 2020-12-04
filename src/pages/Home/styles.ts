import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    min-height: 100vh;
    height: 100vh;
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

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  padding: 0px 25px;
`;

