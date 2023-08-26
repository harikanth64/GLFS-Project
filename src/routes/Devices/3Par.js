import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { fetchDevices } from '../../Devices';
import { useLoaderData } from 'react-router-dom';

export function loader() {

    return "Your data is here!"

}

function Par3(props) {
  const data = useLoaderData();
  const [deviceFields, setDeviceFields] = useState([{ id: "", type: "PAR3", ip: "", user: "", pwd: "", model: "", serial: "" }]);
  const [error, setError] = useState(null)
  const host = "http://localhost:5000/par3";

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(deviceFields)
    // setError(null);
    // fetchDevices(deviceFields)
    //   .then((data)=> {
    //     data.map((item,index)=>{
    //       setDeviceFields((deviceFields)=>[
    //         ...deviceFields,
    //         {
    //           id: data.index,
    //           ip: data.ip,
    //           user: data.pwd,
    //           model: data.model,
    //           serial: data.serial
    //         }

    //       ])
    //     })
    //     console.log(data.length)
    //   })
    //   .catch(err => setError(err))
    //   .finally()

    // console.log(deviceFields);


      async function updateDevice() {
        const response = await fetch('http://localhost:5000/PAR3', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify(deviceFields),
        });
  
        if(!response.ok) throw Error('Please reload the app');
        const data = await response.json();
        setDeviceFields(data);
        console.log(data)
      }
  
      // function filterDevice() {
      //   devices.filter(item => item.deviceFields.length > 1).map((device) => (
      //     device?.deviceFields.filter(index => index.id === 1 ).map((filteredLink) => {
      //         // return filteredLink.type;
      //         return setDeviceFilter(filteredLink.type);
      //       })
      //   ))
      // }
  
      updateDevice();
      // filterDevice();
  
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
    setDeviceFields([...deviceFields, { ip: "", type: "PAR3", user: deviceFields[0].user, pwd: deviceFields[0].pwd, model: "", serial: "" }])
  }


  const handleRemoveField = (index) => {
    const field = [deviceFields]
    field.splice(index, 1);
    setDeviceFields(field);
  };


  return (
    <>
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


      {/* <div className='card'>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">{}</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            {
              json.map((item)=> { (
            <tr key={item.id}>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> )
                    })
                  }
          </tbody>
        </table>
      </div> */}
    </>
  )
}

export default Par3
