// I M P O R T   P A C K A G E S
// Packages Import
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

// Styles Import

// I M P O R T   C O N T E X T
import FavoriteContext from "../context/FavoriteContext";
import ShoppingContext from "../context/ShoppingContext";

// Files Import



const ShowSherds = ({sherd}) => {
const [randomColor, setRandomColor] = useState("black");
const [favorite, setFavorite] = useContext(FavoriteContext);
const [good, setGood] = useContext(ShoppingContext);

const colorPalette = ["beige", "blue", "grey", "lime", "oliv", "orange","black", "red"]

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

useEffect(()=>{
  setRandomColor(colorPalette[Math.floor(Math.random() * colorPalette.length)])
},[])

const favoriteHandler = () => {
  const newFav = [...favorite, { ...sherd, backgroundColor: randomColor }];
  setFavorite(newFav);
}
  
const shoppingHandler = () => {
  const newGood = [...good, { ...sherd, backgroundColor: randomColor }];
  setGood(newGood);
}

  return (
    <div className="sherds-all black-grad-135">
      <Link className="link " to={`/products/${sherd.id}`}>
        <div className="img-container-all">
          <img src={sherd.sherdColor[randomColor]} alt="shirt" width="290" /> 
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{sherd.text}</p> 
          </div>            
        </div>
      </Link>
        <div className="details-all">
          <span style={{color: randomColor}}>{"{ "}text: </span>
          <span style={{color:"white"}} className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
          <span style={{color: randomColor}}>price: </span>
          <span style={{color:"white"}}>{sherd.price.toFixed(2)} €uro</span>
          <span style={{color:"white"}}>{" }"}</span>
        </div>
        <div className="flex">
        <button className="circle" onClick={favoriteHandler}>
          <FontAwesomeIcon className="heart"
          icon={faHeart} /></button>
          <button onClick={shoppingHandler} className="circle"><FontAwesomeIcon
          icon={faCartShopping}/></button>
        </div>      
      </div>
  );
};

export default ShowSherds;