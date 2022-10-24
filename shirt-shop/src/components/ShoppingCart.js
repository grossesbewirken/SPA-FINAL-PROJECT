// Packages Import
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles Import
import "../styles/text.css"
import "../styles/favoritencart.css"

// Files Import
import ShoppingContext from "../context/ShoppingContext";
import ColorContext from "../context/colorContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = () => {
  const navigate = useNavigate()
  const [colorContext] = useContext(ColorContext)
  const [goods, setGoods] = useContext(ShoppingContext);

const deleteGood = (sherd)=>{
  const newGood = goods.filter(shoppedGood => shoppedGood !== sherd);
  setGoods(newGood);
}
  
const shoppingHandler = ()=>{
  setGoods([]);
}

return (
  <div>
    <h1 className="favcart-hl">your shopping cart</h1>
    {goods.map((sherd, i) =>{ 
      return(
        <div className="favcart-cardd black-grad-135 flex" key={i}>
          <div>            
            <div className="img-container-all">
              <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="290" /> 
              <div className="text-container-all" >
                <p className="sherd-text-all favcart-text" style={{color:sherd.fontColor}}>{sherd.text} </p> 
              </div>            
            </div>   
          </div>
          <div className="shopping-details">
            <p style={{color:colorContext[sherd.backgroundColor]}}>sherdObject{"{"}</p>
            <p >backgroundColor: {sherd.backgroundColor},</p>
            <p>fontColor: {sherd.fontColor},</p>
            <p>author: {sherd.author},</p>
            <p>value: {sherd.price.toFixed(2)} €uro </p>
            <p style={{color:colorContext[sherd.backgroundColor]}}> {" } "}</p>

            <div className="favcart-button-container">
              <button 
                type="button" 
                className="delete-button favcart-button" 
                onClick={()=>deleteGood(sherd)}><FontAwesomeIcon icon={faTrash} />delete
              </button>
            </div>

          </div>   
      </div>
      )
    })}


    <div className="favcart-button-container">
      {goods.length === 0 ? 
        ("") :
        (<Link className="link" to="/carousel">
          
        <button 
          type="button" 
          className="buy-button favcart-button" 
          onClick={shoppingHandler}>BUY
        </button>
        </Link>)
      }  
      <button
        className="favcart-button" 
        onClick={()=>navigate("/")}>return Shop;
      </button>         
    </div>

  </div>
);
};

export default ShoppingCart;