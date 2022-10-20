import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const colorPalette = ["beige", "black", "blue", "grey", "lime", "oliv", "orange", "red", "white"]

const ShowDetails = ({sherds}) => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [backgroundColor, setBackgroundColor] = useState("black")
  const [fontColor, setFontColor] = useState("white")

  const textStyle = {
    color:fontColor,
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
  
  const currSherd = sherds.find(sherd => sherd.id === +id)
  
  const colorHandler = (event)=>{
    const color = event.target.className.split(" ")[0]
    setBackgroundColor(color)
  }
  const fontHandler = (event)=>{
    const color = event.target.className.split(" ")[0]
    setFontColor(color)
  }

  return (
    <div>
      <div className="details-top-container">
        <div className="img-container-single img-container-all">
          <img src={currSherd.sherdColor[backgroundColor]} alt="" width="200" />
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{currSherd.text}</p> 
          </div>       
        </div>        
        <div className="select-single">
          <div>
            <h2>background-color: </h2>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} circle`} onClick={(event)=>colorHandler(event)}></div>)}
            </div>
          </div>
          <div>
            <h2>color: </h2>
            <div className="color-container">
              {colorPalette.map(color => <div className={`${color} circle`} onClick={(event)=>fontHandler(event)}></div>)}
            </div>            
          </div>
          <div></div>
          <div></div>
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
          <button>herz</button>
        </div>
        <div className="button-container-single">        
          <button onClick={()=>navigate("/")}>return Shop;</button>        
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;