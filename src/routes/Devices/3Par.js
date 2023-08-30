import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { updateDevice } from '../../DeviceApi';
import { useLoaderData, Form, useActionData } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);

  // formData.forEach(element => {
  //   element.append(formData, JSON.stringify(element))
  // });

  // console.log(formData.getAll(formData))

  // const lineItemData = {
  //   id: "",
  //   type: "PAR3",
  //   ip: formData.get('ip'),
  //   user: formData.get('user'),
  //   pwd: formData.get('pwd'),
  //   model: formData.get('model'),
  //   serial: formData.get('serial'),
  // }



  // console.log(data);
  return null;
}


function Par3(props) {
  const data = useLoaderData();
  const [deviceFields, setDeviceFields] = useState([{ type: "PAR3", ip: "", user: "", pwd: "", model: "", serial: "" }]);
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null);
  const host = "http://localhost:5000/par3";

  const actionData = useActionData();
  // console.log(actionData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(deviceFields)
    const obj = {};
    for (let index = 0; index < deviceFields.length; index++) {
      obj[index] = deviceFields[index];
    }
    console.log(obj)
    setStatus("submitting");
    setError(null);

    const uploadJS = async () => {
      try {
        const res = await Promise.all(deviceFields.map(async element => {
          await updateDevice(element)
            // .then(data => console.log(data))
            // .catch(err => setError(err))
            // .finally(() => setStatus("idle"))
        }));
        // const data = res.map((res)=> res.data);
        // console.log(`calling ${data}`)
      } catch {
        throw Error("Promise Failed!")
      }
    };
    uploadJS()

    // const uploadResult = Promise.all(promises).then((data) => {
    //   console.log(data)
    // })

    // updateDevice(...deviceFields)
    // .then(data => console.log(data))
    // .then(data => {
    //   data.map((field) => {
    //     setDeviceFields([...deviceFields], { type: "PAR3", ip: field.ip, user: field.user, pwd: field.pwd, model: field.model, serial: field.serial })
    //   })
    // })
    // .catch(err => setError(err))
    // .finally(() => setStatus("idle"));


  }


  const handleChange = (e, index) => {
    const { name, value } = e.target
    const field = [...deviceFields];
    field[index][name] = value
    setDeviceFields(field);
    // console.log(JSON.stringify(field));
    // console.log(index, event.target.name)
    // console.log(field[1][name]);
  }

  const handleAddNewField = () => {
    setDeviceFields([...deviceFields, { type: "PAR3", ip: "", user: deviceFields[0].user, pwd: deviceFields[0].pwd, model: "", serial: "" }])
  }


  const handleRemoveField = (index) => {
    const field = [...deviceFields]
    field.splice(index, 1);
    setDeviceFields(field);
  };

  function lineItem() {
    return (deviceFields.map((eachField, index) => (
      <div className="row my-2" key={index}>
        <div className="col-md-2 gx-3 gy-0"><input type="text" name="ip" value={eachField.ip} className="form-control" id="ip" onChange={(e) => handleChange(e, index)} /></div>
        <div className="col-md-2 gx-3 gy-0"><input type="text" name="user" value={eachField.user} className="form-control" id="user" onChange={(e) => handleChange(e, index)} /></div>
        <div className="col-md-2 gx-3 gy-0"><input type="test" name="pwd" value={eachField.pwd} className="form-control" id="pwd" onChange={(e) => handleChange(e, index)} /></div>
        <div className="col-md-2 gx-3 gy-0"><input type="text" name="model" value={eachField.model} className="form-control" id="model" onChange={(e) => handleChange(e, index)} /></div>
        <div className="col-md-2 gx-3 gy-0"><input type="text" name="serial" value={eachField.serial} className="form-control" id="serial" onChange={(e) => handleChange(e, index)} /></div>
        {deviceFields.length > 1 &&
          (
            <div className='col-auto align-self-end gy-0'>
              <button type="button" class="btn btn-light" title="Delete" onClick={() => handleRemoveField(index)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
          )}
      </div>
    )))
  }

  return (
    <>
      <div className='card p-4'>
        <Form method="post" className="row g-3" onSubmit={handleSubmit}>
          <div className='gy-0'><h4>{props.title}</h4></div>

          <div className="row g-3 mt-0">
            <div className="col-md-2"><label for="HostName" className="form-label">IP/HostName</label></div>
            <div className="col-md-2"><label for="user" className="form-label">User</label></div>
            <div className="col-md-2"><label for="pwd" className="form-label">Password File</label></div>
            <div className="col-md-2"><label for="prod" className="form-label">Product#</label></div>
            <div className="col-md-2 gx-0"><label for="srl" className="form-label">Serial#</label></div>
            {lineItem()}
          </div>
          <div className="col-4" >
            <button type="button" className="btn btn-primary m-2" onClick={handleAddNewField}>Add More +</button>
            {/* <button type="submit" className="btn btn-primary" disabled={status === "submitting"} on={handleSubmit}>
              {status === "submitting" ? "Saving..." : "Save"}
            </button> */}
            <button type="submit" className="btn btn-primary" on={handleSubmit}>Save</button>
          </div>
        </Form >
      </div >
    </>
  )
}

export default Par3
