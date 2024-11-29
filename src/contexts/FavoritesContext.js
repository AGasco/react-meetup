import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setUserFavorites((prevFavorites) => [...prevFavorites, meetup]);
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevFavorites) =>
      prevFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
