import React from 'react'
import '../App.css';
import { Outlet, NavLink } from 'react-router-dom'
import { DeviceItems } from '../routes/Devices/DeviceItems';
import DeviceDropSelect from './DeviceDropSelect';
import Navbar from './Navbar';

function DeviceLayout() {
  // var activeClassName = isActive ? 'active' : '';



  
  return (
    <>
      {/* Using Relative Paths */}
      <Navbar />
      <DeviceDropSelect />
      <Outlet />
    </>
  )
}

export default DeviceLayout
