import { Home } from 'pages';
import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';

const AppContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: ${ThemeColors.bg};
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
