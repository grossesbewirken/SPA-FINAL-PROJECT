import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ShowDetails = ({sherds}) => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [backgroundColor, setBackgroundColor] = useState("red")
  const [fontColor, setFontColor] = useState("black")

  const currSherd = sherds.find(sherd => sherd.id === +id)
  console.log(currSherd);
  const textStyle = {
    color:fontColor,
    position: "absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    marginTop: "12%",
    marginLeft: "20%",
    marginRight: "43%",
    marginBottom: "25%",
    textAlign:"center"  
  }
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
          <img src={currSherd.shirtColor[backgroundColor]} alt="" width="200" />
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{currSherd.text}</p> 
          </div>       
        </div>        
        <div className="select-single">
          <div>
            <h2>background-color: </h2>
            <div className="color-container">
              <div className="beige circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="black circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="blue circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="grey circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="lime circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="oliv circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="orange circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="red circle" onClick={(event)=>colorHandler(event)}></div>
              <div className="white circle" onClick={(event)=>colorHandler(event)}></div>
            </div>
          </div>
          <div>
            <h2>color: </h2>
            <div className="color-container">
              <div className="beige circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="black circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="blue circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="grey circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="lime circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="oliv circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="orange circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="red circle" onClick={(event)=>fontHandler(event)}></div>
              <div className="white circle" onClick={(event)=>fontHandler(event)}></div>
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