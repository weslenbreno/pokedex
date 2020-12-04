import 'react-toastify/dist/ReactToastify.css';
import { Details, FavoritesPage, Home } from 'pages';
import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import store, { persistor } from 'store/store';

const AppContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  background-color: ${ThemeColors.bg};
  overflow: auto;
`;

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
          <ToastContainer />
        </PersistGate>
      </Provider>
    </AppContainer>
  );
}

export default App;
