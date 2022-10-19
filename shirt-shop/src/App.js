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
  setColor("rgb(125,250,0)")
  
  const style ={
    color:color
  }
  console.log(data);

  return (
    <div style={style} className="App">
        <p>hallo</p>
    </div>
  );
}

export default App;


