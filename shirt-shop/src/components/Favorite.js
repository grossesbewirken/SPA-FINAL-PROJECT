import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import ColorContext from "../context/colorContext";
import "../styles/text.css"
import "../styles/favoriten.css"

const Favorite = () => {
  const [colorContext] = useContext(ColorContext)
  const [favoriteContext, setFavoriteContext] = useContext(FavoriteContext)

  const deleteFav = (sherd)=>{
    const newFav = favoriteContext.filter(favSherd => favSherd !== sherd)
    setFavoriteContext(newFav)
  }
  const buyHandler = ()=>{

  }

  return (
    <div>
      <h1>Favoriten</h1>
      {favoriteContext.map((sherd) =>{ 
        return(
          <div className="favorite-container flex">
            <div className="sherds-all black-135-deg">            
              <div className="img-container-all">
                <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="200" /> 
                <div className="text-container-all" >
                  <p className="sherd-text-all" style={{color:sherd.fontColor}}>{sherd.text} </p> 
                </div>            
              </div>   
            </div>
            <div className="favoriten-details">
              <p style={{color:sherd.backgroundColor}}>sherdObject{"{"}</p>
              <p>text: {sherd.text},</p>
              <p>author: {sherd.author},</p>
              <p>backgroundColor: {sherd.backgroundColor},</p>
              <p>fontColor: {sherd.fontColor},</p>
              <p>value: {sherd.price.toFixed(2)}€uro </p>
              <p style={{color:sherd.backgroundColor}}> {" } "}</p>
              <button type="button" className="delete-button" onClick={()=>deleteFav(sherd)}>delete</button>
              <button type="button" className="delete-button" onClick={buyHandler}>buy</button>
            </div>            
        </div>
        )
      })}

    </div>
  );
};

export default Favorite;