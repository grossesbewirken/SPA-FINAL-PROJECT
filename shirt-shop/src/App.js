// Packages Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { Routes, Route, Link, Navigate } from 'react-router-dom';
// import ColorContext from './context/colorContext';
// import { useContext } from 'react';

// Styles Import
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Files Import
// import sherds from "./data/products"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
library.add(faMagnifyingGlass);

function App() {
  // const [color, setColor] = useContext(ColorContext)

  return (
    <div className="App">
      <Header
      FontAwesomeIcon={FontAwesomeIcon}
      />
      <Sidebar />
    </div>
  );
}

export default App;


