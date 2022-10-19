// Packages Import
// import { FontAwesomeIcon } from "fortawesome/react-fontawesome";
// import { library } from 'fortawesome/fontawesome-svg-core';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ColorContext from './context/colorContext';
import { useContext } from 'react';

// Styles Import
import './styles/App.scss';

// Files Import
import sherds from "./data/products"

function App() {
  const [color, setColor] = useContext(ColorContext)

  return (
    <div className="App">
        <p>hallo</p>
        <img src={sherds[0].shirtColor.black} alt="" width="150"/>
      

    </div>
  );
}

export default App;


