import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


function Devices() {

  const [deviceData, setdeviceData] = useState({ ip: "", user: "", pwd: "", model: "", serial: "" })
  function handleSubmit(e) {
    e.preventDefault();
    console.log(deviceData);
  }

  function handleChange(e) {
    const { name, value } = e.target
    setdeviceData({...deviceData, [name]: value});
  }

  return (
    <>

      <div className='container'>
        <div className='add-device'>
          <h4>Add Devices</h4>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              New +
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">VMWare</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hyper-V</Dropdown.Item>
              <Dropdown.Item href="#/action-3">OneView</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="container">

          <form className="row g-3">
            <div className='col-md-2 align-self-end'><h4>MSA</h4></div>
            <div className="col-md-2">
              <label for="inputEmail4" className="form-label">IP/HostName</label>
              <input type="text" name="ip"  value={deviceData.ip} className="form-control" id="inputEmail4" onChange={handleChange}/>
            </div>
            <div className="col-md-2">
              <label for="inputPassword4" className="form-label">User</label>
              <input type="text" name="user" value={deviceData.user} className="form-control" id="inputPassword4" onChange={handleChange}/>
            </div>
            <div className="col-md-2">
              <label for="inputPassword4" className="form-label">Password</label>
              <input type="password" name="pwd" value={deviceData.pwd} className="form-control" id="inputPassword4" onChange={handleChange}/>
            </div>
            <div className="col-2">
              <label for="inputAddress" className="form-label">Product Model</label>
              <input type="text" name="model" value={deviceData.model} className="form-control" id="inputAddress" onChange={handleChange}/>
            </div>
            <div className="col-2">
              <label for="inputAddress2" className="form-label">System MidPlaneSerial</label>
              <input type="text" name="serial" value={deviceData.serial} className="form-control" id="inputAddress2" onChange={handleChange}/>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div >
      <Outlet />
    </>
  )
}

export default Devices
