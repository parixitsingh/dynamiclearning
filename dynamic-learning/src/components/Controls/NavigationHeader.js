import React from 'react';
import './NavigationHeader.css';
import HomeButton from './HomeButton';
import CategoriesButton from './CategoriesButton';
import AboutButton from './AboutButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavigationHeader(props) {
  return (
    <>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand><HomeButton /></Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar" />
        <Navbar.Collapse id="header-navbar">
          <Nav>
          <CategoriesButton data= {props.data}/>
          <Nav.Link><AboutButton /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationHeader