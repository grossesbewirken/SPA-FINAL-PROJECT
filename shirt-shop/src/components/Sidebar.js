// Packages Import
import { useContext } from "react";
import ColorContext from "../context/colorContext";


// Styles Import
import '../styles/sidebar.scss';
import "../styles/showsherds.css"


// Files Import
import fjm from '../images/fjm-logo.png';

const Sidebar = ({toggle, showSidebar, currColor}) => {
  const [colorContext, setColorContext] = useContext(ColorContext)

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
          <li className="li-sidebar">Movies <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar">Series <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar">Music <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar">Nerdic Philosophy <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
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

