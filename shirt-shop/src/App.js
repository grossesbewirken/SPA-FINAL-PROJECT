// Packages Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import ColorContext from './context/colorContext';
// import { useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import FavoriteContext from "./context/FavoriteContext";

// Styles Import
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Files Import
import sherds from "./data/products"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ShowSherds from './components/ShowSherds';
import ShowDetails from './components/ShowDetails';
import Favorite from "./components/Favorite";
import Carousel from "./components/Carousel";
library.add(faMagnifyingGlass);




function App() {
  // const [color, setColor] = useContext(ColorContext)
  const [toggle, setToggle] = useState(true);
  const showSidebar = () => {
    setToggle(curr => !curr);
  }

  const [favorite, setFavorite] = useContext(FavoriteContext)
  
  useEffect(()=>{
    const getFav = JSON.parse(localStorage.getItem("favorite"))
    if(getFav !== null && getFav.length !== 0){
      console.log("hallo");
      setFavorite(getFav)
    }
    console.log("nichtHallo");
  },[])

  useEffect(()=>{
    localStorage.setItem("favorite", JSON.stringify(favorite))
  },[favorite])

  const [currColor, setCurrColor] = useState("")

  return (
  <div className="App">
      <Header
      FontAwesomeIcon={FontAwesomeIcon}
      />
      <button className=
      // "sidebar-outer-toggle-button "
      {`sidebar-outer-toggle-button 
      ${toggle ?
        "hide-outer-sidebar-button" :
        "hide-outer-sidebar-button-onClick"}`}
        onClick={showSidebar}
      >
        getSidebar
      </button>
    <div className="sidebar-content-flex">
        <div className=
          {`sidebar-container-all  
          ${toggle ? "hide-sidebar" : ""}`}>
        <Sidebar toggle={toggle} showSidebar={showSidebar} currColor={currColor} setCurrColor={setCurrColor}/>
        </div>
      <Carousel />
      {/* <div className="sherd-container-all">
        <Routes>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={sherds.map(sherd => <ShowSherds key={sherd.id} sherd={sherd}/>)} />
          <Route path="/products/:id" element={<ShowDetails sherds={sherds} currColor={currColor} setCurrColor={setCurrColor}/>} />
          <Route path="/favoriten" element={<Favorite sherds={sherds}/>}></Route>
        </Routes>
      </div> */}
    </div>
  </div>
  );
}

export default App;
