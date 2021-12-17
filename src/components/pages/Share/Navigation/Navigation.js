import React from 'react';
import { ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo/ed-logo-grey.png'



const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <div >
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} width='100%' alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto fw-bold">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to='/events'>Events</Nav.Link>
      <Nav.Link as={Link} to='/teachers'>Teachers</Nav.Link>
      <Nav.Link as={Link} to='/all_students'>Studends</Nav.Link>
      <Nav.Link href="#galary">Gallery</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav className='ms-auto fw-bold'>
    {
      user?.email ? <Nav.Link><ButtonGroup onClick={logOut}>LogOut</ButtonGroup></Nav.Link> 
      :
      <Nav.Link as={Link} to='/login'><ButtonGroup>Login</ButtonGroup></Nav.Link>
    }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;