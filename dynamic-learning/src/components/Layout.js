import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationHeader from './Controls/NavigationHeader';

function Layout(props) { 
  return (
    <>
        <NavigationHeader data={props.data}/>
        <Outlet />
    </>
  )
}

export default Layout