import { useContext, useEffect, useState } from "react";

import "../styles/showsherds.css"
import FavoriteContext from "../context/FavoriteContext";

import { Link } from "react-router-dom";
const ShowSherds = ({sherd}) => {
const [favorite, setFavorite] = useContext(FavoriteContext)
const [randomColor, setRandomColor] = useState("black")

const colorPalette = ["beige", "blue", "grey", "lime", "oliv", "orange","black", "red"]
console.log("random Color:", randomColor);
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

useEffect(()=>{
  setRandomColor(colorPalette[Math.floor(Math.random() * colorPalette.length)])
},[])

const favoriteHandler = () => {
  const newFav = [...favorite, {...sherd, backgroundColor: randomColor}]
  setFavorite(newFav)
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
          <span className="red-text">{"{ "}text: </span>
          <span className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
          <span className="text-details-all red-text">price: </span>
          <span>{sherd.price.toFixed(2)} €uro</span>
          <span className="red-text">{" }"}</span>
        </div>
        <div>
          <button onClick={favoriteHandler}>FAV</button>
          <button>BUY</button>
        </div>      
      </div>
  );
};

export default ShowSherds;