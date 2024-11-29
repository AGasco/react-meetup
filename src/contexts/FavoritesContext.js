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

  const addFavorite = (meetup) => {
    setUserFavorites((prevFavorites) => [...prevFavorites, meetup]);
  };

  const removeFavorite = (meetupId) => {
    setUserFavorites((prevFavorites) =>
      prevFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavorite = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite,
    removeFavorite,
    itemIsFavorite
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
