// I M P O R T   P A C K A G E S
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import ShoppingCart from "./components/ShoppingCart"

// I M P O R T   S T Y L I N G
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


// I M P O R T   C O N T E X T
import FavoriteContext from "./context/FavoriteContext";
import ShoppingContext from "./context/ShoppingContext";

// Files Import
import sherds from "./data/products";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ShowSherds from './components/ShowSherds';
import ShowDetails from './components/ShowDetails';
import Favorite from "./components/Favorite";
import Carousell from "./components/Carousell";
// import ShoppingCart from './components/ShoppingCart';

library.add(faMagnifyingGlass);

function App() {
  const [randomColor, setRandomColor] = useState("black")
  const colorPalette = ["beige", "blue", "grey", "lime", "oliv", "orange","black", "red"] 
  const [currColor, setCurrColor] = useState("")
  const [favorite, setFavorite] = useContext(FavoriteContext)
  const [goods, setGoods] = useContext(ShoppingContext);
  const [filterList, setFilterList] = useState([])
  console.log(sherds);
  // Toggles for show Sidebar, Sidebar Buttons and for showing Carousel at the mount of the website
  const [toggle, setToggle] = useState(true);
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [counter, setCounter] = useState(0);

  const showCarousel = () => {
    setCarouselToggle(curr => !curr);
    const newCount = 1
    setCounter(counter + newCount);
    console.log(counter);
  }

  const showSidebar = () => {
    setToggle(curr => !curr);
  }  
  
  // useEffects to set the choosen favorite "sherds" in the localStorage and get them back after reload the side
  useEffect(()=>{
    const getFav = JSON.parse(localStorage.getItem("favorite"))
    const getGoods = JSON.parse(localStorage.getItem("goods"))
    if(getFav !== null && getFav.length !== 0){
      setFavorite(getFav)
    }
    if(getGoods !== null && getGoods.length !== 0){
      setGoods(getGoods)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(()=>{
    localStorage.setItem("favorite", JSON.stringify(favorite))
    localStorage.setItem("goods", JSON.stringify(goods))
  }, [favorite, goods])
  
  return (
  <div className="App">
    {/* Toggle shows the Carousel until the carouselToggle is turned to false (with onClick on "enter"). Then the regular shop is shown */}
    {
      carouselToggle
      ?
      (<Carousell
          showCarousel={showCarousel}
          currColor={currColor} 
          setCurrColor={setCurrColor}
          counter={counter}
      />)
      :
      (
    <>        
      <Header
        currColor={currColor} 
        setCurrColor={setCurrColor} 
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
        <Sidebar
          toggle={toggle} 
          showSidebar={showSidebar} 
          currColor={currColor} 
          setCurrColor={setCurrColor} 
          setFilterList={setFilterList}/>
      </div>
      <div className="sherd-container-all">
        <Routes>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={filterList.length === 0 ? 
          sherds.map(sherd => <ShowSherds key={sherd.id} sherd={sherd} setRandomColor={setRandomColor} colorPalette={colorPalette} />): 
          filterList.map(sherd => <ShowSherds key={sherd.id} sherd={sherd} setRandomColor={setRandomColor} colorPalette={colorPalette}/>)} />
          <Route path="/products/:id" element={<ShowDetails sherds={sherds} currColor={currColor} setCurrColor={setCurrColor} colorPalette={colorPalette}/>}/>
          <Route path="/favoriten" element=
          {<Favorite sherds={sherds} />}/>
          <Route path="/shoppingCart" element=
          {<ShoppingCart sherds={sherds} showCarousel={showCarousel} />} />
        </Routes>
      </div>
    </div>
    </>)}
  </div>
  ) 
}

export default App;

