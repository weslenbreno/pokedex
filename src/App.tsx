import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import store, { persistor } from 'store/store';
import { Loading } from 'components';

const Home = React.lazy(() => import('pages/Home/Home'));
const Details = React.lazy(() => import('pages/Details/DetailsPage'));
const Favorites = React.lazy(() => import('pages/Favorites/Favorites'));

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
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route exact path="/detail/:id">
                <Details />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <ToastContainer />
          </Suspense>
        </PersistGate>
      </Provider>
    </AppContainer>
  );
}

export default App;
