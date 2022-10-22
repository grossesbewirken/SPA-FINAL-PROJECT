import { useContext, useEffect, useState } from "react";

import "../styles/showsherds.css"
import FavoriteContext from "../context/FavoriteContext";

import { Link } from "react-router-dom";
const ShowSherds = ({sherd}) => {
const [favorite, setFavorite] = useContext(FavoriteContext)
const [randomColor, setRandomColor] = useState("black")

const colorPalette = ["beige", "blue", "grey", "lime", "oliv", "orange","black", "red"]

const textStyle = {
  position: "absolute",
  top:0,
  left:0,
  right:0,
  bottom:0,
  marginTop: "10%",
  marginLeft: "32%",
  marginRight: "32%",
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
          <img src={sherd.sherdColor[randomColor]} alt="shirt" width="200" /> 
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{sherd.text}</p> 
          </div>            
        </div>
      </Link>
        <div className="details-all">
          <span className="red-text">{"{ "}text: </span>
          <span style={{color:"white"}} className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
          <span className="text-details-all red-text">price: </span>
          <span style={{color:"white"}}>{sherd.price.toFixed(2)} €uro</span>
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