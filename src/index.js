import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';
import { FavoritesContextProvider } from './contexts/FavoritesContext';
import { MeetupsContextProvider } from './contexts/MeetupsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MeetupsContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </MeetupsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
