// Packages Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect } from "react";

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
import FavoriteContext from "./context/FavoriteContext";
import Carousell from "./components/Carousell";
import ShoppingCart from './components/ShoppingCart';

library.add(faMagnifyingGlass);

function App() {
  const [filterList, setFilterList] = useState([])
  const [favorite, setFavorite] = useContext(FavoriteContext)
  const [toggle, setToggle] = useState(true);
  const [carouselToggle, setCarouselToggle] = useState(true);
  const showCarousel = () => {
    setCarouselToggle(curr => !curr);
  }
  console.log(carouselToggle)

  const [currColor, setCurrColor] = useState("")
  
  useEffect(()=>{
    const getFav = JSON.parse(localStorage.getItem("favorite"))
    if(getFav !== null && getFav.length !== 0){
      setFavorite(getFav)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(()=>{
    localStorage.setItem("favorite", JSON.stringify(favorite))
  },[favorite])
  
  const showSidebar = () => {
    setToggle(curr => !curr);
  }  

  return (
  <div className="App">
    {/* Toggle shows the Carousel until the carouselToggle is turned to false (with onClick on "enter"). Then the regular shop is shown */}
    {
      carouselToggle
      ?
      (<Carousell
        showCarousel={showCarousel}          
      />)
      :
      (
    <>        
      <Header
      FontAwesomeIcon={FontAwesomeIcon}
      setFilterList={setFilterList}
    />
    {/* Toggle regulates if the "Outer Sidebar Button" is shown or not. It is also chained to the window size */}
    <button className=
    {`sidebar-outer-toggle-button 
    ${toggle ?
      "hide-outer-sidebar-button" :
      "hide-outer-sidebar-button-onClick"}`}
      onClick={showSidebar}
    >
      getSidebar
    </button>
      <div className="sidebar-content-flex">
      {/*Toggle regulates if the Sidebar is shown or not. It is also chained to the window size*/}
      <div className=
          {`sidebar-container-all  
          ${toggle ? "hide-sidebar" : ""}`}>
        <Sidebar toggle={toggle} showSidebar={showSidebar} currColor={currColor} setCurrColor={setCurrColor} setFilterList={setFilterList}/>
      </div>
      <div className="sherd-container-all">
        <Routes>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={filterList.length === 0 ? 
          sherds.map(sherd => <ShowSherds key={sherd.id} sherd={sherd}/>): 
          filterList.map(sherd => <ShowSherds key={sherd.id} sherd={sherd}/>)} />
          <Route path="/products/:id" element={<ShowDetails sherds={sherds} currColor={currColor} setCurrColor={setCurrColor}/>} />
          <Route path="/favoriten" element={<Favorite sherds={sherds}/>}></Route>
        </Routes>
      </div>
    </div>
    </>)}
  </div>
  );
}

export default App;

