import React from 'react';
import "./GiveItTry.css";
import HomeButton from '../Controls/HomeButton';

function GiveItTry(props) {
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
          <textarea className='text-area'>
            default text
          </textarea>
        </div>
        <div className='try-content-result'>
            right side result
        </div>
      </div>
    </div>
  )
}

export default GiveItTry