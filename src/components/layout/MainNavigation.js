import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <nav className={classes.navbar} data-test="navigation-navbar">
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
              My Favorites <span className={classes.badge}>{0}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
