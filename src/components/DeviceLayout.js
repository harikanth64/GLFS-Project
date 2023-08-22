import React from 'react'
import '../App.css';
import { Outlet, NavLink } from 'react-router-dom'
import { DeviceItems } from '../routes/Devices/DeviceItems';
import DeviceDropSelect from './DeviceDropSelect';

function DeviceLayout() {
  // var activeClassName = isActive ? 'active' : '';

  console.log(DeviceItems.title)
  return (
    <>
      {/* Using Relative Paths */}
      <div className="topnav">
        {/* <NavLink to="/devices" end style={({ isActive }) => isActive ? activeStyle : null}>Devices</NavLink> */}
        {/* In Relative path we can use current as . (dot) */}
        {/* <NavLink to="." end style={{background:"white"}} >Devices</NavLink>
          <NavLink to="3par" style={{background:"white"}}>3PAR</NavLink>
          <NavLink to="storeonce" style={{background:"white"}}>SroreOnce</NavLink> */}
        {
          DeviceItems.map((nav) => {
            return (
              <NavLink to={nav.link} style={{ background: "white" }}>{nav.title}</NavLink>
            )
          }
          )
        }

      </div>
      <DeviceDropSelect />
      <Outlet />
    </>
  )
}

export default DeviceLayout
