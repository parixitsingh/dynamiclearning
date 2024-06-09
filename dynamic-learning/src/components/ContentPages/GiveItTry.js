import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./GiveItTry.css";
import HomeButton from '../Controls/HomeButton';

function GiveItTry() {
  const [data, setData] = useState(null);
  let location = useLocation();
  let param = new URLSearchParams(location.search).get('example');
  useEffect(() => {
    fetch('http://localhost:8081/letstry?example=' + param,
        {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            origin: "http://localhost:3000", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "strict-origin-when-cross-origin" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          }
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='try-container'>
      <div className='try-header'>
          <div className='try-header-left-container'>
              <HomeButton hideHomeText={true}/>
          </div>
          <div className='try-header-right-container'>
            
          </div>
      </div>
      <div className='try-content'>
        <div className='try-content-code'>
          <textarea className='text-area' value={data ? data['program'] : "Loading..."}>
          </textarea>
        </div>
        <div className='try-content-result'>
          {data ? data['result'] : "Loading..."}
        </div>
      </div>
    </div>
  )
}

export default GiveItTry