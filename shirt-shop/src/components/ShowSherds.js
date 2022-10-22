// I M P O R T   P A C K A G E S
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


// I M P O R T   C O N T E X T
import FavoriteContext from "../context/FavoriteContext";
import ColorContext from "../context/colorContext";


// I M P O R T   S T Y L I N G
import "../styles/showsherds.css"
import '../styles/header.scss';
import "../styles/App.scss"



const ShowSherds = ({sherd, currColor}) => {
const [favorite, setFavorite] = useContext(FavoriteContext)
const [colorContext] = useContext(ColorContext)
const [randomColor, setRandomColor] = useState("black")

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
          <span style={{color: randomColor}}>{"{ "}text: </span>
          <span style={{color:"white"}} className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
          <span style={{color: randomColor}}>price: </span>
          <span style={{color:"white"}}>{sherd.price.toFixed(2)} €uro</span>
          <span style={{color:"white"}}>{" }"}</span>
        </div>
        <div className="flex">
          <button className="circle" onClick={favoriteHandler}>FAV</button>
          <button className="circle">BUY</button>
        </div>      
      </div>
  );
};

export default ShowSherds;