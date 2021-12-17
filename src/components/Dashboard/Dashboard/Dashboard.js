import React from 'react';
import { Container,  Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        
           <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand>Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to='/add_students'>Add Students</Nav.Link>
          <Nav.Link >Add Teachers</Nav.Link>
          <Nav.Link >Add Events</Nav.Link>
          
        </Nav>
    
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
     
    );
};

export default Dashboard;