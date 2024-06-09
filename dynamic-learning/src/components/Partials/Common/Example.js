import React from 'react';
import "./Example.css";

function Example(props) {
  const onClick = ()=>{
    let urlSuffix = props.URLSuffix || "";
    window.open("/letstry?example=first" + urlSuffix, "_blank");
  };
  return (
    <div className='example-container'>
        <pre class="code">
            {props.content}
            <div className={ props.hideLetsTryBtn ? 'hide': 'lets-try-button' } onClick={onClick}>Let's try</div>
        </pre>
    </div>
  )
}

export default Example