import React from 'react';
import { useNavigate } from "react-router-dom";
import "./AboutButton.css";

function AboutButton() {
    const navigate = useNavigate();
 
    const about = () => {
        navigate("/about")
    }
  return (
    <span className='about-text' onClick={ about }>About us</span>
  )
}

export default AboutButton