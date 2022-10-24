// Packages Import
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles Import
import "../styles/text.css"
import "../styles/favoritencart.css"
import "../styles/showsherds.css"

// Files Import
import FavoriteContext from "../context/FavoriteContext"
import ColorContext from "../context/colorContext";
import ShoppingContext from "../context/ShoppingContext";
import { faCartShopping, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

const Favorite = () => {
  const navigate = useNavigate()
  const [favoriteContext, setFavoriteContext] = useContext(FavoriteContext);
  const [colorContext] = useContext(ColorContext);
  const [goods, setGoods] = useContext(ShoppingContext)

  const deleteFav = (sherd)=>{
    const newFav = favoriteContext.filter(favSherd => favSherd !== sherd)
    setFavoriteContext(newFav)
  }
  const shoppingHandler = (sherd) => {
    const newGood = sherd;
    setGoods([...goods, {...newGood}])
  }

  return (
    <div className="color-white">
      <h1 className="favcart-hl">your favorites</h1>
      {favoriteContext.map((sherd, i) =>{ 
        return(
          <div className="favcart-cardd black-grad-135 flex" key={i}>
            <div>            
              <div className="img-container-all">
                <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="290" /> 
                <div className="text-container-all" >
                  <p className="sherd-text-all favcart-text" style={{color: sherd.backgroundColor === "white" ? "black" : sherd.fontColor}}>{sherd.text} </p> 
                </div>            
              </div>   
            </div>
            <div className="favoriten-details favcart-p">
              <p style={{color:colorContext[sherd.backgroundColor]}}>sherdObject{"{"}</p>
              <p>backgroundColor: {sherd.backgroundColor},</p>
              <p>fontColor: {sherd.fontColor},</p>
              <p>author: {sherd.author},</p>
              <p>value: {sherd.price.toFixed(2)} €uro </p>
              <p style={{color:colorContext[sherd.backgroundColor]}}> {" } "}</p>


              <div className="favcart-button-container">
                <button 
                  type="button"
                  className="add-button favcart-button" 
                  onClick={() => shoppingHandler(sherd)}><FontAwesomeIcon icon={faCartShopping} />add to cart
                </button>
                <button 
                  type="button" 
                  className="delete-button favcart-button" 
                  onClick={()=>deleteFav(sherd)}><FontAwesomeIcon icon={faTrash} />delete
                </button>
              </div>


            </div>   
        </div>
        )
      })}
      <button
        className="favcart-button"
        onClick={()=>navigate("/")}>return Shop;</button>         
    </div>
  );
};

export default Favorite;