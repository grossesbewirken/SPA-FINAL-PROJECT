import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useContext } from "react";
import ColorContext from "../context/colorContext";
import FavoriteContext from "../context/FavoriteContext";

const colorPalette = ["red", "orange","beige", "white", "lime",  "blue", "grey", "oliv","black"]

const sizes = ["XS", "S", "M", "L", "XL"]

const ShowDetails = ({sherds}) => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [colorContext] = useContext(ColorContext)
  const [favorite, setFavorite] = useContext(FavoriteContext)
  const [currSherd, setCurrSherd] = useState(sherds.find(sherd => sherd.id === +id))

  const textStyle = {
    color: `${currSherd.fontColor}`,
    position: "absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    marginTop: "10%",
    marginLeft: "32%",
    marginRight: "32%",
    marginBottom: "25%",
    textAlign:"center" 
  }
  
  
  const colorHandler = (event)=>{
    const color = event.target.className.split(" ")[0]
    setCurrSherd({...currSherd, backgroundColor: color })
  }
  const fontHandler = (event)=>{    
    const color = event.target.className.split(" ")[0]
    setCurrSherd({...currSherd, fontColor:colorContext[color]})
  }
  const customHandler = (event)=>{
    const color = event.target.value
    setCurrSherd({...currSherd, fontColor:color})
  }
  const sizeHandler = (event)=>{
    const size = event.target.innerText
    setCurrSherd({...currSherd, size:size})
  }
  const favoriteHandler= ()=>[
    setFavorite([...favorite, currSherd])
  ]

  return (
    <div>
      <div className="details-top-container">
        <div className="img-container-single img-container-all">
          <img src={currSherd.sherdColor[currSherd.backgroundColor]} alt="" width="200" />
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{currSherd.text}</p> 
          </div>       
        </div>        
        <div className="select-single">
          <div>
            <h3>background-color: </h3>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} circle`} onClick={(event)=>colorHandler(event)}></div>)}
            </div>
          </div>
          <div>
            <h3>color: </h3>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} circle`}  onClick={(event)=>fontHandler(event)}></div>)}
              <label className="customColor circle" htmlFor="customColor">?</label>
              <input onChange={(event)=> customHandler(event)} className="hidden" type="color" id="customColor" />
            </div>            
          </div>
          <div>
            <h3>width: </h3>
            {sizes.map(size => <div className="circle" onClick={(event)=>sizeHandler(event)}>{size}</div>)}
          </div>
          <div>
            <h3>value: </h3>
            <div>{currSherd.price.toFixed(2)} €uro</div>
          </div>
        </div>
      </div>

      <div className="details-bottom-container">
        <div className="details-single">
        <span className="red-text">{"{ "}text: </span>
          <span className="text-details-all">{currSherd.text.length > 15 ? currSherd.text.slice(0, 15) : currSherd.text}...,</span><br />
          <span className="text-details-all red-text">price: </span>
          <span>{currSherd.price.toFixed(2)} €uro</span>
          <span className="red-text">{" }"}</span>
          <button>warenkorb</button>
          <button type="button" onClick={favoriteHandler}>herz</button>
        </div>
        <div className="button-container-single">        
          <button onClick={()=>navigate("/")}>return Shop;</button>        
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;