import React from 'react';
import { Container,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const DashboardNavigation = () => {
  const {user} = useAuth();
    return (
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand as={Link} to="/deshboard_home" >Ideash- Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/add_students">Add Students</Nav.Link>
          <Nav.Link as={Link} to="/add_events">Add Events</Nav.Link>
          <Nav.Link as={Link} to="/add_teacher">Add Teachers</Nav.Link>
          <Nav.Link as={Link} to="/add_admin">Make Admin</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
          <Nav.Link href="#deets">{user.displayName}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
     
    );
};

export default DashboardNavigation;