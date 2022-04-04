import {MouseEvent} from 'react';
import {Offer} from '../../types/offer-types';

type ListProps = {
  points: Offer[];
  onListItemHover: (listItemName: string) => void;
};

function List(props: ListProps): JSX.Element {
  const {points, onListItemHover} = props;

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <ul className="list">
      {points.map((point, index) => {
        const keyValue = point.id;
        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={listItemHoverHandler}
          >
            {point.title}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
