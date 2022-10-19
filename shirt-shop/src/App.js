// Packages Import
// import { FontAwesomeIcon } from "fortawesome/react-fontawesome";
// import { library } from 'fortawesome/fontawesome-svg-core';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ColorContext from './context/colorContext';
import { useContext } from 'react';

// Styles Import
import './styles/App.scss';

// Files Import
import data from "./data/products.json"

function App() {
  const [color, setColor] = useContext(ColorContext)

  console.log(data);

  return (
    <div className="App">
        <p>hallo</p>
    </div>
  );
}

export default App;


