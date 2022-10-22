// Packages Import
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles Import
import "../styles/text.css"
import "../styles/shoppingCart.scss"

// Files Import
import ShoppingContext from "../context/ShoppingContext";
import ColorContext from "../context/colorContext";

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
    <h1>Favoriten</h1>
    {goods.map((sherd, i) =>{ 
      return(
        <div className="shopping-container flex" key={i}>
          <div className="sherds-all black-135-deg">            
            <div className="img-container-all">
              <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" width="200" /> 
              <div className="text-container-all" >
                <p className="sherd-text-all" style={{color:sherd.fontColor}}>{sherd.text} </p> 
              </div>            
            </div>   
          </div>
          <div className="shopping-details">
            <p style={{color:colorContext[sherd.backgroundColor]}}>sherdObject{"{"}</p>
            <p>text: {sherd.text},</p>
            <p>author: {sherd.author},</p>
            <p>backgroundColor: {sherd.backgroundColor},</p>
            <p>fontColor: {sherd.fontColor},</p>
            <p>value: {sherd.price.toFixed(2)}€uro </p>
            <p style={{color:colorContext[sherd.backgroundColor]}}> {" } "}</p>
            <button type="button" className="delete-button" onClick={()=>deleteGood(sherd)}>delete</button>
          </div>   
      </div>
      )
    })}
    {goods.length === 0 ? 
      ("") :
      (<Link className="link" to="/carousel">
      <button type="button" className="buy-button" onClick={shoppingHandler}>BUY</button>
      </Link>)
    }  
    <button onClick={()=>navigate("/")}>return Shop;</button>         

  </div>
);
};

export default ShoppingCart;