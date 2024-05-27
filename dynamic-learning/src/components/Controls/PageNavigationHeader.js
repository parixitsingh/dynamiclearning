import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import "./PageNavigationHeader.css";

function PageNavigationHeader(props) {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate("/"+path)
    }
    let previousBtnTitle = "Previous"
    let nextBtnTitle = "Next"

    if (props.previousBtnTitle) {
        previousBtnTitle = props.previousBtnTitle
    }

    if (props.nextBtnTitle) {
        nextBtnTitle = props.nextBtnTitle
    }

    const onPreviousBtn = (event)=>{
        event.preventDefault();
        if (props.onPreviousBtn) {
            navigateTo(props.onPreviousBtn)
        }
    }

    const onNextBtn = (event)=>{
        event.preventDefault();
        if (props.onNextBtn) {
            navigateTo(props.onNextBtn)
        }
    }

    const navigationButtons = [];

    if (!props.hidePreviousBtn) {
        navigationButtons.push(<Button variant="outline-success" onClick={onPreviousBtn} class="nav-btn">{previousBtnTitle}</Button>)
    } else {
        navigationButtons.push(<span></span>)
    }

    if (!props.hideNextBtn) {
        navigationButtons.push(<Button variant="outline-success" onClick={onNextBtn} class="nav-btn">{nextBtnTitle}</Button>)
    }

    return (
        <Navbar expand="lg" className="">
          <Container fluid>
            { navigationButtons }
          </Container>
        </Navbar>
      );
}

export default PageNavigationHeader