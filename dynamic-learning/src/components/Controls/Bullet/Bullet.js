import React from 'react';
import "./Bullet.css";
import { useNavigate } from "react-router-dom";

function Bullet(props) {
  const navigate = useNavigate();

  const topic = () => {
      let navigationURL = "/" + props.data.topic.toLowerCase();
      navigate(navigationURL);
  }
  return (
    <div className='bullet col-6 col-xs-6 col-sm-6 col-lg-3' >
        <span className='bullet-content' onClick={ topic } >
            <div className='bullet-prefix-text'>Start</div>
            <div>{props.data.topic}</div>
        </span>
    </div>
  )
}

export default Bullet;