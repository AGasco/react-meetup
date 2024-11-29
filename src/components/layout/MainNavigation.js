import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import useHideOnScroll from './../../util-hooks/useHideOnScroll';
import { useContext } from 'react';
import FavoritesContext from '../../contexts/FavoritesContext';

const SCROLL_AMOUNT_TO_HIDE = 50;

export default function MainNavigation() {
  const showNavbar = useHideOnScroll(SCROLL_AMOUNT_TO_HIDE);
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav
      className={`${classes.navbar} ${showNavbar ? '' : classes.hide}`}
      data-test="navigation-navbar"
    >
      <div className={classes.content}>
        <NavLink to="/" className={classes.logo}>
          React Meetups
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" className={classes.link}>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup" className={classes.link}>
              Add a New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={classes.link}>
              My Favorites{' '}
              <span className={classes.badge}>{favorites.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
