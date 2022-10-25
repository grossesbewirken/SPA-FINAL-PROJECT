// I M P O R T   P A C K A G E S
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from "react";

// I M P O R T   C O N T E X T
import ColorContext from "../context/colorContext";
import ShoppingContext from '../context/ShoppingContext';
import FavoriteContext from '../context/FavoriteContext';

// Styles Import
import '../styles/header.scss';
import "../styles/App.scss"

// Files Import
import sherds from "../data/products";

const Header = ({setFilterList, currColor, setFilterHeader}) => {
  const inputHandler = (event)=>{
    event.preventDefault()
    const searchTerm = event.target.value
    const newFilter = sherds.filter(sherd => 
      sherd.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sherd.author.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      sherd.date.includes(searchTerm))
    setFilterList(newFilter)
  }
  const [colorContext] = useContext(ColorContext);
  const [shoppingContext] = useContext(ShoppingContext)
  const [favoritenContext] = useContext(FavoriteContext)

  const changeFilterHeaderFav = () => {
    setFilterHeader('your favorites');
  }

  const changeFilterHeaderSC = () => {
    setFilterHeader('your shopping cart');
  }

  const quantityCart = shoppingContext.map(good=> +good.quantity)


  return (
<Navbar expand="lg" className="shadow-lg sticky-top navbar">
    <Container fluid className="d-flex justify-content-between">
      <Navbar bg="dark">
        <Container>
          <Link className="link" to="/">
            <Navbar.Brand className="text-white header-hl">
            <span style={{color: colorContext[currColor]}}>nerd</span>sherd
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>


      <Navbar.Toggle aria-controls="navbarScroll" className="border border-light"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
        </Nav>
        <Form onChange={(event)=>inputHandler(event)} className="d-flex justify-content-end">
          <div className="input-group">
            <input type="text" 
              className="me-2 form-control searchfield" placeholder="Search" 
              aria-label="Username" aria-describedby="basic-addon1" 
              onChange={(event)=>inputHandler(event)}/>
            </div>
            <div id="length-parent">
              <Link id="length-parent" className="link" to="/favoriten"
                onClick={changeFilterHeaderFav}>
                <Button
                variant="outline-dark"
                className="me-2 text-white border border-light circle"
                >
                <FontAwesomeIcon className="heart"
                  icon={faHeart}/>
                </Button>
                {favoritenContext.length !== 0 &&
              <div id='quantity-fav'>{favoritenContext.length}</div>}
              </Link>
            </div>
            <div id="length-parent">
              <Link className='link' to="/shoppingCart"
                onClick={changeFilterHeaderSC}>
                <Button
                variant="outline-dark"
                className="me-2 text-white border border-light circle">
                <FontAwesomeIcon
                  icon={faCartShopping} />
                </Button>
                {shoppingContext.length !== 0 &&
                <div id='quantity-cart'>{quantityCart.reduce((a,b)=>a+b)}</div>}
              </Link>
            </div>

        </Form>
      </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
