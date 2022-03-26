import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer-types';


type AppProps = {
  offersCount: number;
  offers: Offers;
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offersCount={offersCount} offers={offers} />}/>
        <Route path={AppRoute.SignInScreen} element={<SignInScreen/>}/>
        <Route path={AppRoute.FavoritesScreen} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offers={offers}/></PrivateRoute>}/>
        <Route path={AppRoute.RoomScreen} element={<RoomScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
