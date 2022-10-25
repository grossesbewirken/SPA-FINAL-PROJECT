// I M P O R T   P A C K A G E S
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

// Styles Import
import "../styles/showdetails.scss"
import "../styles/App.scss"

// Files Import
import colorPick from "../images/color-pick.png"
import ColorContext from "../context/colorContext";
import FavoriteContext from "../context/FavoriteContext";
import ShoppingContext from "../context/ShoppingContext";

const sizes = ["XS", "S", "M", "L", "XL"]

const ShowDetails = ({sherds, currColor, setCurrColor, colorPalette, setRandomColor, setFilterHeader}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [colorContext] = useContext(ColorContext)
  const [favorite, setFavorite] = useContext(FavoriteContext)
  const [currSherd, setCurrSherd] = useState(sherds.find(sherd => sherd.id === +id))
  const [good, setGood] = useContext(ShoppingContext);

  useEffect(()=>{
    setCurrColor(currSherd.backgroundColor)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currSherd])

  const textStyleDetail = {
    color: currSherd.fontColor,
  }  
  
  const colorHandler = (event)=>{
    const color = event.target.className.split(" ")[0]
    setCurrSherd({...currSherd, backgroundColor:color })
  }
  const fontHandler = (event)=>{    
    const color = event.target.className.split(" ")[0]
    setCurrSherd({...currSherd, fontColor: colorContext[color]})
  }
  const customHandler = (event)=>{
    const color = event.target.value
    setCurrSherd({...currSherd, fontColor:color})
  }
  const sizeHandler = (event)=>{
    const size = event.target.innerText
    setCurrSherd({...currSherd, size:size})
  }
  const quantityHandler = (event)=>{
    const quantity = event.target.value
    setCurrSherd({...currSherd, quantity:quantity})
  }
  const favoriteHandler= ()=>{
    const newSherd = currSherd
    setFavorite([...favorite, newSherd])
  }
  const shoppingHandler= ()=>{
    let alreadyThere = good.filter( good => good.id === currSherd.id && good.fontColor === currSherd.fontColor && good.backgroundColor === currSherd.backgroundColor && good.size === currSherd.size)

    const newGood = good.map(good=> 
      good.id === currSherd.id && good.fontColor === currSherd.fontColor && good.backgroundColor === currSherd.backgroundColor && good.size === currSherd.size ? {...good, quantity: +good.quantity + +currSherd.quantity} : good
    )
    setGood(alreadyThere.length !== 0 ? newGood : [...good, {...currSherd, quantity:currSherd.quantity}])
    alreadyThere = []
  }

  const changeFilterHeaderSC = () => {
    setFilterHeader('main');
    navigate("/")
  }

  // navigate("/")

  return (
    <div>
      
    <div className="detail-card black-grad-135">
        
        {/* S H E R D - S H E R D */}
        <div className="detail-sherd ">
          <img  src={currSherd.sherdColor[currSherd.backgroundColor]} alt=""/>
          <div className="detail-text-container" style={textStyleDetail}>
            <p style={{color: currSherd.backgroundColor === "white" ? "black" : currSherd.fontColor,
            fontSize: currSherd.text.length > 20 && "14px"}} className="detail-text">{currSherd.text}</p> 
          </div>

          {/* S H E R D - I N F O */}
            <div className="details-single">
              <div className="details-single-description">
                <span style={{color: colorContext[currColor]}}>{"{ "}</span>
                <span style={{color: colorContext[currColor]}}>text: </span>
                <span className="detail-text-hl" style={{color:"white"}}>{currSherd.text}</span><br/>
                <span style={{color: colorContext[currColor]}}>author: </span>
                <span style={{color:"white"}}>{currSherd.author}</span>
                <span style={{color: colorContext[currColor]}}>{" , "}date: </span>
                <span style={{color:"white"}}>{currSherd.date}</span>
                <span style={{color: colorContext[currColor]}}>{" }"}</span>
              </div>
            </div>
        </div>   

        {/* C U S T O M I Z E R */}
        <div className="select-single customize">
          <div>
            <h5 className="fh hl">background-color: </h5>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} col-circle`} onClick={(event)=>colorHandler(event)}></div>)}
            </div>
          </div>
          <div>
            <h5 className="fh hl">color:</h5>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} col-circle`} onClick={(event)=>fontHandler(event)}></div>)}
              <label className="customColor col-circle" htmlFor="customColor"><img src={colorPick} alt="color-pick" className="color-pick"/></label>
              <input onChange={(event)=> customHandler(event)} className="hidden" type="color" id="customColor" />
            </div>            
          </div>
          <div>
            <h5 className="fh hl">width: </h5>
            <div className="color-container">
            {sizes.map(size => <button className="circle btn text-white border border-light" onClick={(event)=>sizeHandler(event)}>{size}</button>)}
          </div>
        </div>

        <div className="flex between gap">
          <div>
            <h5 className="fh hl">quantity:</h5>
            <input 
              className="value-field" 
              onChange={event=>quantityHandler(event)} 
              type="number" 
              id="quantity"
            />
          </div>

          <div>
            <h5 className="fh hl">value:</h5>
            <div>{(currSherd.price * currSherd.quantity).toFixed(2)} €uro</div>
          </div>

          <div className="details-single-buttons">
            <h5 className="fh hl">get item:</h5>
            <div className="flex">
              <button
                onClick={favoriteHandler} 
                className="circle btn text-white border border-light">
                <FontAwesomeIcon className="heart"
                icon={faHeart} />
              </button>
              <button 
                onClick={shoppingHandler} 
                className="circle btn text-white border border-light">
                <FontAwesomeIcon
                icon={faCartShopping}/>
              </button>
            </div>
          </div>
        </div>
</div>


      </div>

      {/* R E T U R N */}
      <div className="button-container-single carousel-btn">        
        <button className="detail-btn" onClick={changeFilterHeaderSC}>return Shop;</button>        
      </div>
    </div>
  );
};

export default ShowDetails;