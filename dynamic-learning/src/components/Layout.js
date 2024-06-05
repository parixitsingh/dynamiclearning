import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationHeader from './Controls/NavigationHeader';
import Footer from './Controls/Footer';

function Layout(props) { 
  return (
    <>
        <NavigationHeader data={props.data}/>
        <div className='content'>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout