// Packages Import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Hashrouter?
import { ColorContextProvider } from './context/colorContext';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { ShoppingContextProvider } from './context/ShoppingContext';

// Styles Import
import './index.css';

// Files Import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoppingContextProvider>
  <FavoriteContextProvider>
  <ColorContextProvider>
    <HashRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </HashRouter>  
  </ColorContextProvider>
  </FavoriteContextProvider>
  </ShoppingContextProvider>
);