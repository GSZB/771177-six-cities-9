import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in-screen/sign-in-screen';
import Favorites from '../favorites-screen/favorites-screen';
import Room from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';


type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites/>}
        />
        <Route
          path={AppRoute.Room}
          element={<Room/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
