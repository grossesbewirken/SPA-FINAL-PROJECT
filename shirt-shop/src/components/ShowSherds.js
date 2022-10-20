import "../styles/showsherds.css"


import { Link } from "react-router-dom";
const ShowSherds = ({sherd}) => {
const textStyle = {
  position: "absolute",
  top:0,
  left:0,
  right:0,
  bottom:0,
  marginTop: "10%",
  marginLeft: "32%",
  marginRight: "32%",
  marginBottom: "25%",
  textAlign:"center",
}

const colorPalette = ["beige", "blue", "grey", "lime", "oliv", "orange", "red", "white"]

  return (
    <div className="sherds-all black-135-deg">
      <Link className="link" to={`/products/${sherd.id}`}>
        <div className="img-container-all">
          <img src={sherd.sherdColor[colorPalette[Math.floor(Math.random() * colorPalette.length)]]} alt="shirt" width="200" /> 
          <div className="text-container-all" style={textStyle}>
            <p className="sherd-text-all">{sherd.text}</p> 
          </div>            
        </div>
      </Link>
        <div className="details-all">
          <span className="red-text">{"{ "}text: </span>
          <span className="text-details-all">{ sherd.text.length > 15 ? `${sherd.text.slice(0, 15)}...` : sherd.text },</span><br />
          <span className="text-details-all red-text">price: </span>
          <span>{sherd.price.toFixed(2)} €uro</span>
          <span className="red-text">{" }"}</span>
        </div>      
      </div>
  );
};

export default ShowSherds;