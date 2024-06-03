import React from 'react';
import './NavigationHeader.css';
import HomeButton from './HomeButton';
import CategoriesButton from './CategoriesButton';
import AboutButton from './AboutButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderItemList from './HeaderItemList';
function NavigationHeader(props) {
  const content = [];
  content.push(<span className='header-item'>
    <CategoriesButton data= {props.data}/>
  </span>)
  content.push(<span className='header-item'>
    <Nav.Link><AboutButton /></Nav.Link>
  </span>)
  return (
    <div className='nagivation-header'>
    <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand><HomeButton /></Navbar.Brand>
        {content}
        <span className='header-items-list'>
          <HeaderItemList content={content}/>
        </span>
    </Navbar>
    </div>
  )
}

export default NavigationHeader