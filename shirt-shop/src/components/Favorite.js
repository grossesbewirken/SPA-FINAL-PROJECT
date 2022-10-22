// Packages Import
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Styles Import
import "../styles/text.css"
import "../styles/favoriten.css"

// Files Import
import FavoriteContext from "../context/FavoriteContext"
import ColorContext from "../context/colorContext";
import ShoppingContext from "../context/ShoppingContext";

const Favorite = () => {
  const navigate = useNavigate()
  const [favoriteContext, setFavoriteContext] = useContext(FavoriteContext);
  const [colorContext] = useContext(ColorContext);
  const [goods, setGoods] = useContext(ShoppingContext)

  const deleteFav = (sherd)=>{
    const newFav = favoriteContext.filter(favSherd => favSherd !== sherd)
    setFavoriteContext(newFav)
  }
  // const shoppingHandler = (sherd)=>{
  //   const newGood = currSherd
  //   setGood([...good, newGood])
  // }

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
              <p style={{color:colorContext[sherd.backgroundColor]}}>sherdObject{"{"}</p>
              <p>text: {sherd.text},</p>
              <p>author: {sherd.author},</p>
              <p>backgroundColor: {sherd.backgroundColor},</p>
              <p>fontColor: {sherd.fontColor},</p>
              <p>value: {sherd.price.toFixed(2)}€uro </p>
              <p style={{color:colorContext[sherd.backgroundColor]}}> {" } "}</p>
              <button type="button" className="delete-button" onClick={()=>deleteFav(sherd)}>delete</button>
              {/* <button type="button" className="delete-button" onClick={shoppingHandler}>buy</button> */}
            </div>   
        </div>
        )
      })}
      <button onClick={()=>navigate("/")}>return Shop;</button>         

    </div>
  );
};

export default Favorite;