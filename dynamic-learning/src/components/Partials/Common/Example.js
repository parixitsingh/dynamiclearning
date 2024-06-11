import React from 'react';
import "./Example.css";
import Button from '../../Controls/Button';

function Example(props) {
  const onClick = ()=>{
    let urlSuffix = props.URLSuffix || "";
    window.open("/letstry/go?example=first" + urlSuffix, "_blank");
  };
  return (
    <div className='example-container'>
        <pre class="code">
            {props.content}
           { props.hideLetsTryBtn ? '':  <span class="float-right"><Button callBack={onClick} buttonText={"Let's try"}/></span>}
        </pre>
    </div>
  )
}

export default Example