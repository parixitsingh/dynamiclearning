import React from 'react';
import "./Bullet.css";
import { useNavigate } from "react-router-dom";
import PopoverControl from '../Controls/PopoverControl';

function RowBullet(props) {
  const navigate = useNavigate();

  const topic = () => {
      let navigationURL = "/" + props.data.toLowerCase();
      navigate(navigationURL);
  }
  return (
    <div className='col-12 col-xs-12 col-sm-12 col-lg-12' >
        <span onClick={ topic } >
            <div>{props.data}</div>
        </span>
    </div>
  )
}

export default RowBullet;