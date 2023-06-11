import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from "react-router-dom";


function Layout()
{
    return(
        <>
        <Header/>
        <Outlet />
        </>
    )
}

export default Layout;