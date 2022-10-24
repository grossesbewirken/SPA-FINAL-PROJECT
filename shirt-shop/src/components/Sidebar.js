// Packages Import
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// I M P O R T   C O N T E X T
import ColorContext from "../context/colorContext";


// I M P O R T   S T Y L I N G
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
        {/* Toggle regulates if the "Outer Sidebar Button" is shown or not. It is also chained to the window size */}
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
          {`sherds.filter((sherd) => {`}
        </h4>
        <ul className="ul-sidebar">
        <li className="li-sidebar" onClick={filterNothing}>Main <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar" onClick={filterMovie}>Movies && Series <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar" onClick={filterMusic}>Music <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar" onClick={filterPhilosophy}>Nerdic Philosophy <span style={{ color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <div className="spacing-div"></div>
          <li className="li-sidebar">
            <Link className='link' to="/favoriten">Favorites <span style={{ color: colorContext[currColor] }}>{"=>{}"}</span>
            </Link>
          </li>
          <li className="li-sidebar">
          <Link className='link' to="/shoppingCart">Shopping Cart<span style={{ color: colorContext[currColor] }}>{"=>{}"}</span></Link>
          </li>
        </ul>
        <h4>{`})`}</h4>
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
