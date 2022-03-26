import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { OffersData } from './mocks/offers';

const Setting = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OFFERS_COUNT}
      offers={OffersData}
    />
  </React.StrictMode>,
  document.getElementById('root'));

