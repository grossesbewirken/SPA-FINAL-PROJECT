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
import ColorContext from "../context/colorContext";


// Files Import

const ShowSherds = ({sherd, setFilterHeader}) => {
const [favorite, setFavorite] = useContext(FavoriteContext)
const [good, setGood] = useContext(ShoppingContext)
const [colorContext] = useContext(ColorContext)

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
  
const changeFilterHeaderShowDetails = () => {
  setFilterHeader('showDetails');
}

  return (
    <div className="sherds-all black-grad-135">
      <Link className="link " to={`/products/${sherd.id}`} onClick={changeFilterHeaderShowDetails}>
        <div className="img-container-all">
          <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="290" /> 
          <div className="text-container-all" style={textStyle}>
            <p style={{color: sherd.backgroundColor === "white" ? "black" : "white",
            fontSize: sherd.text.length > 21 && "12px"}}className="sherd-text-all">{sherd.text}</p> 
          </div>            
        </div>
      </Link>

      {/* T E X T - favcart */}
      <div className="details-all">
        <span style={{color: sherd.backgroundColor === "black" ? colorContext.red : colorContext[sherd.backgroundColor]}}>{"{ "}text: </span>
        <span style={{color: "white"}} className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
        <span style={{color: sherd.backgroundColor === "black" ? colorContext.red : colorContext[sherd.backgroundColor]}}>price: </span>
        <span style={{color:"white"}}>{sherd.price.toFixed(2)} €uro</span>
        <span style={{color: sherd.backgroundColor === "black" ? colorContext.red : colorContext[sherd.backgroundColor]}}>{" }"}</span>
      </div>

      {/* B U T T O N S - favcart */}
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