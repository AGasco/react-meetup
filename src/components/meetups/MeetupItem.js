import { useContext } from 'react';
import FavoritesContext from '../../contexts/FavoritesContext';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

export default function MeetupItem({ item }) {
  const favoritesContext = useContext(FavoritesContext);
  const isFavorite = favoritesContext.itemIsFavorite(item?.id);

  const toggleFavorite = () => {
    if (isFavorite) favoritesContext.removeFavorite(item?.id);
    else favoritesContext.addFavorite(item);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
