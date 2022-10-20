// Packages Import
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";


// Styles Import
import '../styles/header.scss';


// Files Import
import fjm from '../images/fjm-logo.png';


const Header = () => {
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
          {`<Nerd Sherd>`}
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
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                />
            </span>
            <input type="text" className="me-2 form-control search" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
            <Button
              variant="outline-dark"
              className="me-2 text-white border border-light rounded-circle"
            >
              <FontAwesomeIcon
                icon={faCartShopping} />
            </Button>
            <Button
              variant="outline-dark"
              className="me-2 text-white border border-light rounded-circle"
            >
              <FontAwesomeIcon
                icon={faHeart} />
            </Button>
        </Form>
      </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
