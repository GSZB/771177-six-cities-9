import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { OfferCard } from '../../types/offer-types';


type AppProps = {
  offersCount: number;
  offers: OfferCard;
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
