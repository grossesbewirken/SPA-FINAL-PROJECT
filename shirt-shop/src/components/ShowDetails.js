import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useContext } from "react";
import ColorContext from "../context/colorContext";
import FavoriteContext from "../context/FavoriteContext";

// Styles Import
import "../styles/showdetails.css"



const colorPalette = ["red", "orange","beige", "white", "lime",  "blue", "grey", "oliv","black"]
const sizes = ["XS", "S", "M", "L", "XL"]

const ShowDetails = ({sherds}) => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [colorContext] = useContext(ColorContext)
  const [favorite, setFavorite] = useContext(FavoriteContext)
  const [currSherd, setCurrSherd] = useState(sherds.find(sherd => sherd.id === +id))

  console.log(currSherd);
  console.log(favorite);
  
  const textStyle = {
    color: `${currSherd.fontColor}`,
    position: "absolute",
    top:0,
    left:0,
    right:0,
    bottom:300,
    marginTop: "10%",
    marginLeft: "32%",
    marginRight: "32%",
    marginBottom: "25%",
    textAlign:"center",
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
  const favoriteHandler= ()=>{
    const newSherd = currSherd
    setFavorite([...favorite, newSherd])
    console.log("hallo");
  }

  return (
    <div>
      <div className="details-top-container">
        
        {/* C A R D */}
        <div className="img-container-single img-container-all cardd">
          <img src={currSherd.sherdColor[currSherd.backgroundColor]} alt="" width="650" />
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{currSherd.text}</p> 
          </div>

          {/* C A R D */}
          <div className="details-bottom-container">

            <div className="details-single">

              <div className="details-single-description">
                <span className="red-text">{"{ "}text: </span>
                <span className="text-details-all">{currSherd.text.length > 15 ? currSherd.text.slice(0, 15) : currSherd.text}...,</span><br />
                <span className="text-details-all red-text">price: </span>
                <span>{currSherd.price.toFixed(2)} €uro</span>
                <span className="red-text">{" }"}</span>
              </div>

              <div className="details-single-buttons">
                <button>warenkorb</button>
                <button onClick={favoriteHandler}>herz</button>
              </div>

            </div>
          </div>
        </div>   

        {/* C U S T O M I Z E R */}
        <div className="select-single customize">
          <div>
            <h5>background-color: </h5>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} circle`} onClick={(event)=>colorHandler(event)}></div>)}
            </div>
          </div>
          <div>
            <h5>color:</h5>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} circle`}  onClick={(event)=>fontHandler(event)}></div>)}
              <label className="customColor circle" htmlFor="customColor">?</label>
              <input onChange={(event)=> customHandler(event)} className="hidden" type="color" id="customColor" />
            </div>            
          </div>
          <div>
            <h5>width: </h5>
            <div className="color-container">
            {sizes.map(size => <div className="circle" onClick={(event)=>sizeHandler(event)}>{size}</div>)}
            </div>
          </div>
          <div>
            <h5>value:</h5>
            <div>{currSherd.price.toFixed(2)} €uro</div>
          </div>
          <div className="button-container-single">        
          <button onClick={()=>navigate("/")}>return Shop;</button>        
        </div>
        </div>
      </div>


    </div>
  );
};

export default ShowDetails;