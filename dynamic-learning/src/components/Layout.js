import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationHeader from './NavigationHeader';

function Layout(props) { 
  return (
    <>
        <NavigationHeader data={props.data}/>
        <Outlet />
    </>
  )
}

export default Layout