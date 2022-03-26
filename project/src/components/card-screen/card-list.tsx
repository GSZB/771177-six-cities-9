import CardComponent from './card-component';
import { Offer } from '../../types/offer-types';

type CardListProps = {
  offers: Offer;
}


function CardList({offers}: CardListProps): JSX.Element {
  return (
    <>
      <CardComponent offers={offers} />
      <CardComponent offers={offers} />
      <CardComponent offers={offers} />
      <CardComponent offers={offers} />
    </>
  );
}

export default CardList;
