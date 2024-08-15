import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';

const Layout = () => {
 
    return (
      <div id='layout'>
        <Menu/>
        <Outlet />
        <Footer />
      </div>
    );
  }
  

export default Layout;
