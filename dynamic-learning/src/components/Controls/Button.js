import React from 'react';
import "./Button.css";

function Button(props) {
  const onClick = (event)=>{
    if (props.callBack) {
        props.callBack(event)
    }
  };
  return (
    <div className={ 'button-container' } onClick={onClick}>
        {props.buttonText}
    </div>
  )
}

export default Button