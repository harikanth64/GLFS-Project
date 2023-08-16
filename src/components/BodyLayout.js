import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../routes/Home'
import Devices from '../routes/Devices/Devices'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header'
import Navbar  from './Navbar'


function BodyLayout() {
    return (
        <> 
        <Sidebar />
        <Header />
        <Navbar />
        <main>
        <Outlet />
        </main>     
        <Footer />
        </>
    )
}

export default BodyLayout
