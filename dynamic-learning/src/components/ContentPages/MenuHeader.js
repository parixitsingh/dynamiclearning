import React from 'react';
import MenuBullet from '../Bullet/MenuBullet';
import { FaListAlt } from "react-icons/fa";
import "./MenuHeader.css";

function MenuHeader(props) {
    const onclick = (event)=>{
        event.preventDefault()
        props.menu(event)
    }
  return (
    <div className='menu-header'>
       <span className={ props.showMenuBtn ? 'menu-list-option ': 'hide' } onClick={ onclick }><FaListAlt /></span>
       <span className={ props.showMenuBtn ? '' : 'menu-bullets' }>
        {props.data.rows.map((item, _) => (
          <MenuBullet data={item.topic} />
        ))}
       </span>
    </div>
  )
}

export default MenuHeader