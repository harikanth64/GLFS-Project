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
        <div className='mainbody'>
        <Header />
        {/* <Navbar /> */}
        <main>
        <Outlet />
        </main>
        </div>
        <Footer />
        </>
    )
}

export default BodyLayout
