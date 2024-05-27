import React from 'react';
import "./Bullet.css";
import { useNavigate } from "react-router-dom";

function MenuBullet(props) {
    const navigate = useNavigate();

    const topic = () => {
        let navigationURL = "/" + props.data.toLowerCase();
        navigate(navigationURL);
    }
    return (
      <div className='menu-bullet' >
          <span onClick={ topic } >
              <div>{props.data}</div>
          </span>
      </div>
    )
}

export default MenuBullet