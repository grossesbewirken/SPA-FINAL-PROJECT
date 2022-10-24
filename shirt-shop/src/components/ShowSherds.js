// I M P O R T   P A C K A G E S
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";


// Styles Import
import '../styles/header.scss';
import "../styles/App.scss"


// I M P O R T   C O N T E X T
import FavoriteContext from "../context/FavoriteContext";
import ShoppingContext from "../context/ShoppingContext";


// Files Import

const ShowSherds = ({sherd, colorPalette, setRandomColor, currColor}) => {
const [favorite, setFavorite] = useContext(FavoriteContext)
const [good, setGood] = useContext(ShoppingContext)
console.log(sherd);
const textStyle = {
  position: "absolute",
  top:0,
  left:19,
  right:20,
  bottom:0,
  marginTop: "8%",
  marginBottom: "25%",
  textAlign:"center",
}

const favoriteHandler = () => {
  const newFav = [...favorite, { ...sherd}];
  setFavorite(newFav);
}
  
const shoppingHandler = () => {
  const newGood = [...good, { ...sherd}];
  setGood(newGood);
}

  return (
    <div className="sherds-all black-grad-135">
      <Link className="link " to={`/products/${sherd.id}`}>
        <div className="img-container-all">
          <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="290" /> 
          <div className="text-container-all" style={textStyle}>
            <p style={{color: sherd.backgroundColor === "white" ? "black" : "white"}}className="sherd-text-all">{sherd.text}</p> 
          </div>            
        </div>
      </Link>
        <div className="details-all">
          <span style={{color: sherd.backgroundColor}}>{"{ "}text: </span>
          <span style={{color: "white"}} className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
          <span style={{color: sherd.backgroundColor}}>price: </span>
          <span style={{color:"white"}}>{sherd.price.toFixed(2)} €uro</span>
          <span style={{color: sherd.backgroundColor}}>{" }"}</span>
        </div>
        <div className="flex">
          <button
            className="circle"
            onClick={favoriteHandler}>
            <FontAwesomeIcon className="heart" icon={faHeart} />
          </button>
          <button
            className="circle"
            onClick={shoppingHandler}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>      
      </div>
  );
};

export default ShowSherds;