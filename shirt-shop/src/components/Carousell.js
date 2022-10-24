// Packages Import
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

// Styles Import
import '../styles/carousel.scss';
import "../styles/App.scss";

// Files Import
import sherds from "../data/products";
import fjm from '../images/fjm-logo.png';
const Carousell = ({showCarousel, currColor, setCurrColor, counter}) => {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  const [good, setGood] = useContext(ShoppingContext);


  const favoriteHandler = (sherd) => {
    const newFav = [...favorite, { ...sherd}];
    setFavorite(newFav);
  }
    
  const shoppingHandler = (sherd) => {
    const newGood = [...good, { ...sherd}];
    setGood(newGood);
  }

  return (
    <div className='carousel-outer-container'>
      {/* <h1 className="carousell-headline display-1" >
        nerdsherd
      </h1> */}
      {counter < 1
        ? 
      (<h1 className="carousell-headline display-1" >
        nerdsherd
        </h1>)
        :
      (<h1 className="carousell-headline display-1">
        Thank you for shopping</h1>)
      }
      <Carousel className='carousel-inner-container'>
          {sherds.map((sherd, i) => {
            console.log(sherd)
            return (
              <Carousel.Item
                key={i}
                interval={3000} 
                className="carousel-item-container">
                  <Link 
                    className="link" 
                    onClick={showCarousel} 
                    to={`/products/${sherd.id}`}>
                    <div className="carousel-image-container">
                      <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" 
                      width="60%" /> 
                    <div className="carousel-text-field">
                      <p style={{color: sherd.backgroundColor === "white" ? "black" : "white"}}className="sherd-text-all carousel-text">{sherd.text}</p>
                    </div>            
                  </div>
                </Link>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <div className='carousel-btn'>
          <img
            src={fjm}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="FJM logo"
          />
          <Link className="link" to="/">
            <button 
              className="button-container-single button" 
              onClick={showCarousel}>ENTER
            </button>
          </Link>
      </div>
    </div>  
  );
};

export default Carousell;
