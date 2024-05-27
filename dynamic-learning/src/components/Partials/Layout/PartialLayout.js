import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MenuHeader from '../../Controls/MenuHeader';

function PartialLayout(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuBtn, setShowMenuBtn] = useState(false);
  
    const callBack = (event)=>{
      setShowMenu(!showMenu);
      event.preventDefault();
      event.stopPropagation();
    };
  
    const context = {
      menu: {
        showMenu: showMenu,
        setShowMenu: setShowMenu
      },
      menuBtn : {
        showMenuBtn: showMenuBtn,
        setShowMenuBtn: setShowMenuBtn
      },
      callBack: callBack
    }
  
    useEffect(() => {
      document.body.addEventListener('click', () => {
        setShowMenu(false);
      });
    }, []);
    return (
        <>
            <MenuHeader data={props.headerData} menu={callBack} showMenuBtn={showMenuBtn}/>
            <Outlet context={context} />
        </>
    )
}

export default PartialLayout