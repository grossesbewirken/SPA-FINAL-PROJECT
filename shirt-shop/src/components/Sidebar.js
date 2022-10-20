// Packages Import
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';

// Styles Import
import '../styles/sidebar.scss';

// Files Import


const Sidebar = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar-space-top">
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Toggle
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="">
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            Listen Elemente
          </p>
          <p className="mb-0">
            Listen Elemente
          </p>
          <p className="mb-0">
            Listen Elemente
          </p>
          <p className="mb-0">
            Listen Elemente
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;