import {Offer} from '../../types/offer-types';

type ListProps = {
  centers: Offer[];
};

function List(props: ListProps): JSX.Element {
  const {centers} = props;

  return (
    <ul className="list">
      {centers.map((center, index) => {
        const keyValue = center.id;
        return (
          <li
            className="list__item"
            key={keyValue}
          >
            {center.id}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
