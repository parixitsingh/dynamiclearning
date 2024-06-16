import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./GiveItTry.css";
import HomeButton from '../Controls/HomeButton';
import Button from '../Controls/Button';
function GiveItTry(props) {
  const [textValue, setTextValue] = useState('Loading...');
  const [result, setResult] = useState('Loading...');
  let location = useLocation();
  let param = new URLSearchParams(location.search).get('example');
  let baseURL = 'http://localhost:8081/letstry'+props.domain
  let baseURLWithQuery = baseURL+'?example='
  useEffect(() => {
    fetchData(baseURLWithQuery + param, "GET", null, (json) =>{
      setTextValue(json['program']);
      setResult(json['result']);
    }, (err)=>{
      console.log(err)
      setResult("error occurred")
    })
  }, []);

  const onRunClick=()=>{
    setResult("Loading...")
    const body =  textValue ? JSON.stringify(textValue): null;
    const method = "POST";
    const url = baseURLWithQuery + "custom"
    fetchData(url, method, body, (json) =>{
      let output = json['result']
      console.log(output)
      if (json['err']) {
        output += json['err']
      }
      setResult(output);
    }, (err)=>{
      setResult(JSON.stringify(err))
    })
  }

  const onFormatClick=()=>{
    const body =  textValue ? JSON.stringify(textValue): null;
    const method = "POST";
    const url = baseURL + "/format"
    fetchData(url, method, body, (json) =>{
      let output = json['program']
      setTextValue(output);
    }, (err)=>{
      setTextValue(JSON.stringify(err))
    })
  }

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const fetchData = (url, method, body, callBack, errorCallBack) => {
    fetch(url,
      {
          method: method, // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          origin: location.search, // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body,
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "strict-origin-when-cross-origin" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then(response => response.json())
    .then(callBack)
    .catch(errorCallBack);
  }

  return (
    <div className='try-container'>
      <div className='try-header'>
          <div className='try-header-left-container'>
              <HomeButton hideHomeText={true}/>
              <Button callBack={onRunClick} buttonText={"Run"}/>
              <Button callBack={onFormatClick} buttonText={"Format"} className={'format-button'}/>
          </div>
          <div className='try-header-right-container'>
            
          </div>
      </div>
      <div className='try-content'>
        <div className='try-content-code'>
          <textarea className='text-area' value={ textValue } onChange={handleChange}>
          </textarea>
        </div>
        <div className='try-content-result'>
          <pre className='result-container'>
           { result }
          </pre>
        </div>
      </div>
    </div>
  )
}

export default GiveItTry