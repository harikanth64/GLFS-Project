import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

function StoreOnce(props) {
  const [deviceFields, setDeviceFields] = useState([{ ip: "", user: "", pwd: "", model: "", serial: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(deviceFields);
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target
    const field = [...deviceFields];
    field[index][name] = value
    setDeviceFields(field);
    // console.log(index, event.target.name)
    // console.log(field[1][name]);
  }

  const handleAddNewField = () => {
    setDeviceFields([...deviceFields, { ip: "", user: deviceFields[0].user, pwd: deviceFields[0].pwd, model: "", serial: "" }])
  }


  const handleRemoveField = (index) => {
    const field = [...deviceFields]
    field.splice(index, 1);
    setDeviceFields(field);
  };

  return (
    <div className='card p-4'>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className='gy-0'><h4>{props.title}</h4></div>

        <div className="row g-3 mt-0">
          <div className="col-md-2"><label for="HostName" className="form-label">IP/HostName</label></div>
          <div className="col-md-2"><label for="user" className="form-label">User</label></div>
          <div className="col-md-2"><label for="pwd" className="form-label">Password File</label></div>
          <div className="col-md-2"><label for="prod" className="form-label">Product#</label></div>
          <div className="col-md-2 gx-0"><label for="srl" className="form-label">Serial#</label></div>

          {
            deviceFields.map((eachField, index) => (
              <div className="row my-2" key={index}>
                <div className="col-md-2 gx-3 gy-0"><input type="text" name="ip" value={eachField.ip} className="form-control" id="ip" onChange={(e) => handleChange(e, index)} /></div>
                <div className="col-md-2 gx-3 gy-0"><input type="text" name="user" value={eachField.user} className="form-control" id="user" onChange={(e) => handleChange(e, index)} /></div>
                <div className="col-md-2 gx-3 gy-0"><input type="test" name="pwd" value={eachField.pwd} className="form-control" id="pwd" onChange={(e) => handleChange(e, index)} /></div>
                <div className="col-md-2 gx-3 gy-0"><input type="text" name="model" value={eachField.model} className="form-control" id="model" onChange={(e) => handleChange(e, index)} /></div>
                <div className="col-md-2 gx-3 gy-0"><input type="text" name="serial" value={eachField.serial} className="form-control" id="serial" onChange={(e) => handleChange(e, index)} /></div>

                <div className='col-auto ms-4 align-self-end gy-0'>
                  <button type="button" class="btn btn-light btn-font-size" title="Add New" onClick={handleAddNewField}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                {deviceFields.length > 1 &&
                  (
                    <div className='col-auto align-self-end gy-0'>
                      <button type="button" class="btn btn-light" title="Delete" onClick={() => handleRemoveField(index)}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                  )}
              </div>
            ))
          }
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default StoreOnce
