import React, { useState } from 'react'



function Par3(props) {
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
        <form className="row g-3">
          <div className='col-md-2 align-self-end'><h4>{props.title}</h4></div>
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
            <div className="col-md-2">
              <label for="inputAddress" className="form-label">Product#</label>
              <input type="text" name="model" value={deviceData.model} className="form-control" id="inputAddress" onChange={handleChange}/>
            </div>
            <div className="col-2">
              <label for="inputAddress2" className="form-label">Serial#</label>
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
  )
}

export default Par3
