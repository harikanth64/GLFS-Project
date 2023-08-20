import React from 'react'
import '../App.css';
import { Outlet, NavLink } from 'react-router-dom'

function DeviceLayout() {
  // var activeClassName = isActive ? 'active' : '';


  return (
    <>
        {/* Using Relative Paths */}
        <div className="topnav">
          {/* <NavLink to="/devices" end style={({ isActive }) => isActive ? activeStyle : null}>Devices</NavLink> */}
          {/* In Relative path we can use current as . (dot) */}
          <NavLink to="." end style={{background:"white"}} >Devices</NavLink>
          <NavLink to="3par" style={{background:"white"}}>3PAR</NavLink>
          <NavLink to="storeonce" style={{background:"white"}}>SroreOnce</NavLink>
          
        </div>
        <Outlet />
    </>
  )
}

export default DeviceLayout
