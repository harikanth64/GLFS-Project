import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';

import DeviceDropSelect from '../../components/DeviceDropSelect';


function Devices() {

  const [deviceData, setdeviceData] = useState({ ip: "", user: "", pwd: "", model: "", serial: "" })
  function handleSubmit(e) {
    e.preventDefault();
    console.log(deviceData);
  }

  function handleChange(e) {
    const { name, value } = e.target
    setdeviceData({ ...deviceData, [name]: value });
  }

  return (
    <div className='container'>



        <Outlet />
      </div>
      )
}

export default Devices
