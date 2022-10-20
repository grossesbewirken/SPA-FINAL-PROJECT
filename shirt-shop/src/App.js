// Packages Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import ColorContext from './context/colorContext';
// import { useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';


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

console.log(sherds);
library.add(faMagnifyingGlass);

function App() {
  // const [color, setColor] = useContext(ColorContext)

  return (
    <div className="App">
      <Header FontAwesomeIcon={FontAwesomeIcon} />
      <Sidebar />
      <div className="sherd-container-all">
        <Routes>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={sherds.map(sherd => <ShowSherds key={sherd.id} sherd={sherd}/>)} />
          <Route path="/products/:id" element={<ShowDetails sherds={sherds}/>} />
          <Route path="/favoriten" element={<Favorite sherds={sherds}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
