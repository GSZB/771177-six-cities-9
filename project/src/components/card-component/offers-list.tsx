import { useState } from 'react';
import OfferCard from './offer-card';
import { Offer } from '../../types/offer-types';

type CardListProps = {
  offer: Offer;
}


function OffersList({offer}: CardListProps): JSX.Element {
  const [, setActiveOffer] = useState<number | undefined>(undefined);

  const offers = [];
  for(let i = 0; i < 4; i++) {
    offers.push(offer);
  }


  return (
    <>
      {offers.map((el) => (<OfferCard key={el.id} offer={el} setActiveOffer={setActiveOffer}/>))}
    </>
  );
}

export default OffersList;
