import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { updateDevice } from '../../DeviceApi';
import { useLoaderData, Form, useActionData, useFetcher, useNavigate } from 'react-router-dom';
import { TbCloudFog } from 'react-icons/tb';
import DataTable from '../../components/DataTable';

export async function action({ params, request }) {
  const formData = await request.formData()
  const formObj = Object.fromEntries(formData);


  // console.log(obj.request.)

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



  //  console.log(`Actions data: ${data}`);
  // return [...formData]
  return null;
  
}


function Par3(props) {
  const data = useLoaderData();
  const [deviceFields, setDeviceFields] = useState([{ type: "PAR3", ip: "", user: "", pwd: "", model: "", serial: "" }]);
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null);
  const host = "http://localhost:5000/par3";
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const actionData = useActionData();
  const navigateRef = useRef(navigate);

  // console.log(actionData);
  const actionJ = JSON.stringify(actionData);
  console.log(actionJ);

  // const obj = {};
  // actionJ.forEach((elem, i) => {
  //   obj[i] = elem;
  // });
  // console.log(obj);

  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(deviceFields)

    // const uploadJS = async () => {
    //   try {
    //     const res = await Promise.all(deviceFields.map(async element => {
    //         await updateDevice(element)
    //          .then(data => { 
    //             navigate("dataTable")
    //             console.log(data)
    //          })

    //         // .catch(err => setError(err))
    //         // .finally(() => setStatus("idle"))

    //     }));
    //     // const data = res.map((res)=> res.data);
    //     // console.log(`calling ${data}`)
    //   } catch {
    //     throw Error("Promise Failed!")
    //   }
    // };
    // uploadJS()

    try {
      setStatus("submitting");
      setError(null);
      deviceFields.map(element => {
        updateDevice(element)
          .then(data => {
            if (data) {
                // navigate("dataTable");
          }})
          .catch(err => setError(err))
          .finally(() => setStatus("idle"))
      })
    } catch {
      throw Error("Promise failed!")
    }





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
        <Form className="row g-3" method="POST" onSubmit={handleSubmit}>
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
      <br />
      <div className='card p-4'>
        <DataTable device="PAR3"/>

      </div>
    </>
  )
}

export default Par3
