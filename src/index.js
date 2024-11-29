import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoritesContextProvider, MeetupsContextProvider } from './contexts';
import './index.css';

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
