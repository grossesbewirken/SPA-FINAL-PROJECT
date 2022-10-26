// Packages Import
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles Import
import "../styles/text.css"
import "../styles/favoritencart.scss"
import "../styles/showsherds.css"

// Files Import
import FavoriteContext from "../context/FavoriteContext"
import ColorContext from "../context/colorContext";
import ShoppingContext from "../context/ShoppingContext";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

const Favorite = ({setFilterHeader}) => {
  const navigate = useNavigate()
  const [favoriteContext, setFavoriteContext] = useContext(FavoriteContext);
  const [colorContext] = useContext(ColorContext);
  const [goods, setGoods] = useContext(ShoppingContext)

  const deleteFav = (sherd)=>{
    const newFav = favoriteContext.filter(favSherd => favSherd !== sherd)
    setFavoriteContext(newFav)
  }
  const shoppingHandler = (sherd) => {
    let alreadyThere = goods.filter(good => good.id === sherd.id && good.fontColor === sherd.fontColor && good.backgroundColor === sherd.backgroundColor && good.size === sherd.size)

    const newGood = goods.map(good=> 
      good.id === sherd.id && good.fontColor === sherd.fontColor && good.backgroundColor === sherd.backgroundColor && good.size === sherd.size ? {...good, quantity: +good.quantity + +sherd.quantity} : good
    )
    setGoods(alreadyThere.length !== 0 ? newGood : [...goods, {...sherd, quantity:sherd.quantity}])
    alreadyThere = []
    // alert("import Sherd to ShoppinCart")
  }
  
  const changeFilterHeaderSC = () => {
    setFilterHeader('main');
    navigate("/")
  }

  return (
    <div className="color-white">
      {favoriteContext.map((sherd, i) =>{ 
        return(
          <div className="favcart-cardd black-grad-135 flex" key={i}>

            {/* I M A G E - C O N T A I N E R*/}
            <div>            
              <div className="img-container-all">
                <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="290" /> 
                <div className="text-container-all" >
                  <p className="sherd-text-all favcart-text" style={{color: sherd.backgroundColor === "white" ? "black" : sherd.fontColor,
                  fontSize: sherd.text.length > 21 && "12px"}}>{sherd.text} </p> 
                </div>            
              </div>   
            </div>

            {/* I N F O - C O N T A I N E R*/}
            <div className="favoriten-details favcart-p">
              <h4 className="hl fh" style={{color:colorContext[sherd.backgroundColor]}}>sherdObject{"{"}</h4>

              <p>backgroundColor: {sherd.backgroundColor},</p>
              <p>fontColor: {sherd.fontColor},</p>
              <p>author: {sherd.author},</p>
              <p>size: {sherd.size}</p>
              <p>value: {sherd.price.toFixed(2)} €uro </p>
              <p style={{color:colorContext[sherd.backgroundColor]}}> {" } "}</p>

              <div className="favcart-button-container">
                <button 
                  type="button" 
                  className="delete-button favcart-button circle btn text-white border border-light" 
                  onClick={()=>deleteFav(sherd)}><FontAwesomeIcon icon={faTrash} />
                </button>
                <button 
                  type="button"
                  className="add-button favcart-button circle text-white border border-light" 
                  onClick={() => shoppingHandler(sherd)}><FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>


            </div>   
        </div>
        )
      })}
      <button
        className="favcart-button"
        onClick={changeFilterHeaderSC}>return Shop;</button>         
    </div>
  );
};

export default Favorite;