// Packages Import
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


// Styles Import
import '../styles/header.scss';
import "../styles/App.scss"


// Files Import
import fjm from '../images/fjm-logo.png';
import sherds from "../data/products";


const Header = ({setFilterList}) => {
  const inputHandler = (event)=>{
    const searchTerm = event.target.value
    const newFilter = sherds.filter(sherd => 
      sherd.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sherd.author.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      sherd.date.includes(searchTerm))
    setFilterList(newFilter)
  }

  return (
<Navbar bg="dark" expand="lg" className="shadow-lg sticky-top">
    <Container fluid className="d-flex justify-content-between">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={fjm}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="FJM logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

        <Navbar.Brand className="text-white">
          <span className="red-text">{"nerd"}</span>sherd
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" className="border border-light"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
        </Nav>
        <Form className="d-flex justify-content-end">
          <div className="input-group">
            <span className="input-group-text search" id="basic-addon1">
                
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              
            </span>
            <input type="text" className="me-2 form-control search" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={(event)=>inputHandler(event)}/>
            </div>
            <Link className="link" to="/favoriten">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle"
              >
              <FontAwesomeIcon className="heart"
                icon={faHeart} />  
              </Button>
            </Link> 
            <Link className="link" to="/favoriten">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle"
              >
              <FontAwesomeIcon className="heart"
                icon={faHeart}/>  
              </Button>
            </Link>
            <Link className='link' to="/shoppingCart">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle">
              <FontAwesomeIcon
                icon={faCartShopping} />              
              </Button>
            </Link>

        </Form>
      </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
