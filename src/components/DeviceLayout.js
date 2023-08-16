import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function DeviceLayout() {
  return (
    <>
    <div>
        {/* <h1>Add/Remove Devices</h1> */}
        <nav className='device-nav'>
            <NavLink to="/devices">Devices</NavLink>
            <NavLink to="/devices/3par">3PAR</NavLink>
            <NavLink to="devices/3par">SroreOnce</NavLink>
        </nav>
        <Outlet />
    </div>
    </>
  )
}

export default DeviceLayout
