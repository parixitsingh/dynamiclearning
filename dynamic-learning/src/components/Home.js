import React from 'react';
import "./Home.css";
import Gallery from './Gallery/Gallery';

function Home(props) {
  return (
    <div className='home'>
        <Gallery data={props.data}/>
    </div>
  )
}

export default Home