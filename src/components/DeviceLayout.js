import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function DeviceLayout() {
  return (
    <div className='mainbody'>
        {/* <h1>Add/Remove Devices</h1> */}
        <div className='container'>
        <nav>
            <Link to="/devices">Devices</Link>
            <Link to="/devices/3par">3PAR</Link>
            <Link to="devices/3par">SroreOnce</Link>
        </nav>
        <Outlet />
        </div>
    </div>
  )
}

export default DeviceLayout
