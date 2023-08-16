import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../routes/Home'
import Devices from '../routes/Devices'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header'


function BodyLayout() {
    return (
        <> 
        <Sidebar />
        <Header />     
        <Outlet />
        <Footer />
        </>
    )
}

export default BodyLayout
