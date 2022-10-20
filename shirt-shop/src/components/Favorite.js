import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import "../styles/text.css"

const Favorite = () => {
  const [favoriteContext] = useContext(FavoriteContext)
  
  console.log(favoriteContext);
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
            <div>
              <p>Hier kommen die Daten des Sherds hin</p>
            </div>            
        </div>
        )
      })}

    </div>
  );
};

export default Favorite;