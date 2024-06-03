import React from 'react';
import { FaListAlt } from "react-icons/fa";
import "./MenuHeader.css";
import MenuBullet from './Bullet/MenuBullet';

function MenuHeader(props) {
    const onclick = (event)=>{
        event.preventDefault()
        props.menu(event)
    }
  return (
    <div className='menu-header'>
       <div className={ props.showMenuBtn ? 'menu-list-option ': 'hide' } onClick={ onclick }><FaListAlt /></div>
       <div className={ props.showMenuBtn ? 'scrollable' : 'menu-bullets scrollable' }>
        <div className='menu-list-container'>
          {props.data.rows.map((item, _) => (
            <MenuBullet data={item.topic} />
          ))}
        </div>
       </div>
    </div>
  )
}

export default MenuHeader