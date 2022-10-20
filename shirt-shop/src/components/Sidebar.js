// Packages Import


// Styles Import
import '../styles/sidebar.scss';

// Files Import


const Sidebar = ({toggle, showSidebar}) => {

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
        <ul className="ul-sidebar"> sherds.filter()
          <li className="li-sidebar">Movies</li>
          <li className="li-sidebar">Music</li>
          <li className="li-sidebar">Philo</li>
        </ul>
      </div>      
    </div>
  );
};

export default Sidebar;

