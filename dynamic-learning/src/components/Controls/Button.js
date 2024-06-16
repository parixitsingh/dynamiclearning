import React from 'react';
import "./Button.css";

function Button(props) {
  const onClick = (event)=>{
    if (props.callBack) {
        props.callBack(event)
    }
  };

  let className = 'button-container' + ' ' + props.className
  return (
    <div className={ className } onClick={onClick}>
        {props.buttonText}
    </div>
  )
}

export default Button