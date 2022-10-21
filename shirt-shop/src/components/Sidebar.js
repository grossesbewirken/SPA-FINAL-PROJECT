// Packages Import
import { useContext, useState } from "react";
import ColorContext from "../context/colorContext";


// Styles Import
import '../styles/sidebar.scss';
import "../styles/showsherds.css"


// Files Import
import fjm from '../images/fjm-logo.png';
import sherds from "../data/products"

const Sidebar = ({toggle, showSidebar, currColor, setFilterList}) => {
  const [colorContext] = useContext(ColorContext)


  const filterMovie = () => {
    const newList = sherds.filter(sherd => sherd.category === "Movie")
    setFilterList(newList)
    console.log(newList);
  }
  const filterMusic = () => {
    const newList = sherds.filter(sherd => sherd.category === "Music")
    setFilterList(newList)
    console.log(newList);

  }
  const filterPhilosophy = () => {
    const newList = sherds.filter(sherd => sherd.category === "Developer Philosophie")
    setFilterList(newList)
    console.log(newList);

  }

  return (
    <div className="sidebar">
      <div>
        <button className=
        {`sidebar-inner-toggle-button 
        ${!toggle ?
          "hide-inner-sidebar-button" :
          "hide-inner-sidebar-button-onClick"}`}
        onClick={showSidebar}
        >hideSidebar</button>
      </div>
      <div>
        <h4>
          sherds.filter()
        </h4>
        <ul className="ul-sidebar">
          <li className="li-sidebar" onClick={filterMovie}>Movies && Series <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar" onClick={filterMusic}>Music <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar" onClick={filterPhilosophy}>Nerdic Philosophy <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
        </ul>
        <div>
          <img
                  src={fjm}
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="FJM logo"
                />
        </div>  
      </div>
    </div>
  );
};

export default Sidebar;

