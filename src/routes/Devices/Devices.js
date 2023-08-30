import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'



function Devices() {


  return (
    <div className='container'>



        <Outlet />
      </div>
      )
}

export default Devices
