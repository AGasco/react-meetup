import { useContext } from 'react';
import { MeetupList } from '../components';
import { FavoritesContext } from '../contexts';
import classes from './../components/meetups/MeetupList.module.css';

export default function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        <MeetupList meetups={favoritesContext.favorites} />
      </ul>
    </section>
  );
}
