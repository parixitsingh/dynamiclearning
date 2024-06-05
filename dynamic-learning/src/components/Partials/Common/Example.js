import React from 'react';
import "./Example.css";

function Example(props) {
  const onClick = ()=>{
    let urlSuffix = props.URLSuffix || "";
    window.open("http://localhost:3000/letstry/" + urlSuffix, "_blank");
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