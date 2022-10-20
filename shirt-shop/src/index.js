// Packages Import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Hashrouter?
import { ColorContextProvider } from './context/colorContext';
import { FavoriteContextProvider } from './context/FavoriteContext';

// Styles Import
import './index.css';

// Files Import
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteContextProvider>
  <ColorContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>  
  </ColorContextProvider>
  </FavoriteContextProvider>
);