import { Details, FavoritesPage, Home } from 'pages';
import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

const AppContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  background-color: ${ThemeColors.bg};
  overflow: auto;
`;

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/detail/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
