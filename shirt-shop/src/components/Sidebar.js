// Packages Import
import { useContext} from "react";
import ColorContext from "../context/colorContext";
import { useNavigate } from "react-router-dom";


// Styles Import
import '../styles/sidebar.scss';
import "../styles/showsherds.css"


// Files Import
import fjm from '../images/fjm-logo.png';
import sherds from "../data/products"

const Sidebar = ({toggle, showSidebar, currColor, setFilterList}) => {
  const [colorContext] = useContext(ColorContext)
  const navigate = useNavigate()

  const filterMovie = () => {
    const newList = sherds.filter(sherd => sherd.category === "Movie")
    setFilterList(newList)
  }
  const filterMusic = () => {
    const newList = sherds.filter(sherd => sherd.category === "Music")
    setFilterList(newList)
  }
  const filterPhilosophy = () => {
    const newList = sherds.filter(sherd => sherd.category === "Developer Philosophie")
    setFilterList(newList)
  }
  const filterNothing = () => {
    const newList = []
    setFilterList(newList)
    navigate("/")
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
        <li className="li-sidebar" onClick={filterNothing}>Main <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
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

