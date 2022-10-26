// Packages Import
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles Import
import "../styles/text.css"
import "../styles/favoritencart.scss"

// Files Import
import ShoppingContext from "../context/ShoppingContext";
import ColorContext from "../context/colorContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ({showCarousel, setFilterHeader}) => {
  const navigate = useNavigate()
  const [colorContext] = useContext(ColorContext)
  const [goods, setGoods] = useContext(ShoppingContext);

const sum = goods.map((good)=>{
  return good.quantity ? good.price * good.quantity : good.price
})
  
  
const total = goods.length !== 0 && sum.reduce((a,b)=> a+b)

const deleteGood = (sherd)=>{
  const newGood = goods.filter(shoppedGood => shoppedGood !== sherd);
  setGoods(newGood);
}
  
const shoppingHandler = ()=>{
  setGoods([]);
  showCarousel();
}

const changeFilterHeaderSC = () => {
    setFilterHeader('main');
    navigate("/")
}

return (
  <div className="color-white">
    {goods.map((sherd, i) =>{ 
      return(
        <div className="favcart-cardd black-grad-135 flex" key={i}>
          <div>            
            <div className="img-container-all">
              <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="290" /> 
              <div className="text-container-all" >
                <p className="sherd-text-all favcart-text" style={{color: sherd.backgroundColor === "white" ? "black" : sherd.fontColor,
                fontSize: sherd.text.length > 21 && "12px"}}>{sherd.text} </p> 
              </div>            
            </div>   
          </div>

          <div className="favoriten-details favcart-p">
            <h4 className="hl fh" style={{color:colorContext[sherd.backgroundColor]}}>sherdObject{"{"}</h4>
            <p>backgroundColor: {sherd.backgroundColor},</p>
            <p>fontColor: {sherd.fontColor},</p>
            <p>author: {sherd.author},</p>
            <p>size: {sherd.size}</p>
            {sherd.quantity ? <p>quantity: {sherd.quantity}</p> : <p>quantity: 1</p> }
            <p>value: {sherd.quantity ? (sherd.price * sherd.quantity).toFixed(2): sherd.price.toFixed(2)} €uro </p>
            <p style={{color:colorContext[sherd.backgroundColor]}}> {" } "}</p>
            <div className="favcart-button-container">
              <button 
                type="button" 
                className="delete-button favcart-button btn circle text-white border border-light" 
                onClick={()=>deleteGood(sherd)}><FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>   
      </div>
      )
    })}
    {goods.length !== 0 && <div style={{color:"white"}}>
        <p>Versandkosten: 4.95€</p>
        <p >Total: {`${(total + 4.95).toFixed(2)} €uro`}</p>
      </div>}
      
    <div className="favcart-button-container">
      {goods.length === 0 ? 
        ("") :
        (
        <button 
          type="button" 
          className="buy-button favcart-button" 
          onClick={shoppingHandler}>BUY
        </button>
        )
      }  
      <button
        className="favcart-button" 
        onClick={changeFilterHeaderSC}>return Shop;
      </button>         
    </div>

  </div>
);
};

export default ShoppingCart;