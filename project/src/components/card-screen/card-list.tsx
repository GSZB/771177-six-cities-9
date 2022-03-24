import CardComponent from './card-component';
import { OfferCard } from '../../types/offer-types';

type CardListProps = {
  offers: OfferCard;
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
