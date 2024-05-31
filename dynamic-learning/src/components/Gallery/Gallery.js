import React from 'react';
import "./Gallery.css";
import Bullet from '../Controls/Bullet/Bullet';

function Gallery(props) {
    const rows = []; 
    for (let i = 0; i < props.data.rows.length; i++){
        rows.push(<Bullet data={ props.data.rows[i] }/>);
    }
    return (
        <div >
            <div className='gallery-graphic-content'>
                <div className='gallery-heading'>
                    <h1>
                        { props.data.heading }
                    </h1>
                </div>
                <div className='gallery'>
                    <div className='gallery-content'>
                        { rows }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Gallery