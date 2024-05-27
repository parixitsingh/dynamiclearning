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
       <span className={ props.showMenuBtn ? 'menu-list-option ': 'hide' } onClick={ onclick }><FaListAlt /></span>
       <span className={ props.showMenuBtn ? 'scrollable' : 'menu-bullets scrollable' }>
        {props.data.rows.map((item, _) => (
          <MenuBullet data={item.topic} />
        ))}
       </span>
    </div>
  )
}

export default MenuHeader