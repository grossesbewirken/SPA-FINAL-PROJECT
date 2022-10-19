// Packages Import
// import { FontAwesomeIcon } from "fortawesome/react-fontawesome";
// import { library } from 'fortawesome/fontawesome-svg-core';
import { Routes, Route, Navigate } from 'react-router-dom';

// Styles Import
import './styles/App.scss';

// Files Import
import sherds from "./data/products"
import ShowSherds from './components/ShowSherds';
import ShowDetails from './components/ShowDetails';
console.log(sherds);

function App() {
  return (
    <div className="App">
      <div className="sherd-container-all">
        <Routes>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={sherds.map(sherd => <ShowSherds key={sherd.id} sherd={sherd}/>)} />
          <Route path="/products/:id" element={<ShowDetails sherds={sherds}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


