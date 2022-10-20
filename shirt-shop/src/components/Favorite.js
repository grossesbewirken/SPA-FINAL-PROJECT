import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import "../styles/text.css"
import "../styles/favoriten.css"

const Favorite = () => {
  const [favoriteContext] = useContext(FavoriteContext)

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
            </div>            
        </div>
        )
      })}

    </div>
  );
};

export default Favorite;