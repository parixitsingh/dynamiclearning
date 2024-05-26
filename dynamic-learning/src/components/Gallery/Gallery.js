import React from 'react';
import "./Gallery.css";
import Bullet from '../Bullet/Bullet';

function Gallery(props) {
    const rows = []; 
    for (let i = 0; i < props.data.rows.length; i++){
        rows.push(<Bullet data={ props.data.rows[i] }/>);
    }
    return (
        <div className='gallery'>
            <div className='gallery-heading'>
                <h1>
                    { props.data.heading }
                </h1>
            </div>
            <div className='gallery-content'>
                { rows }
            </div>
        </div>
    )
}

export default Gallery