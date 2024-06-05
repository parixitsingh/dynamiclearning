import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./HomeButton.css";
// use this link for more icons https://react-icons.github.io/react-icons/icons/fa/

function HomeButton(props){
    const navigate = useNavigate();
 
    const home = () => {
        navigate("/")
    }
    return (
        <span className="home-button" onClick={ home } >
            <span className="home-button-icon"><FaHome /></span>
            <span className={ props.hideHomeText ? "hide": "home-button-text" }>Dynamic Learning</span>
        </span>
    )
}

export default HomeButton;