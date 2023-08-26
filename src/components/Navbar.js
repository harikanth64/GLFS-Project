import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { DeviceItems } from '../routes/Devices/DeviceItems';



function Navbar(props) {
  const devices = props.data
  console.log(devices);
  // const [devices, setDevices] = useState([]);
  // const [post, setPost] = useEffect([]);
  const [deviceFilter, setDeviceFilter] = useState([])

  //   async function GetDeviceData() {

  //        return await fetch("http://localhost:5000/devices", {
  //           method: "get",
  //           headers: { "Content-Type": "application/json"   }
  //           }
  //         )
  //           .then(res => res.json())
  //           .then(data => { 
  //                 console.log(data);
  //                 return data;
  //           }) 
  // }


  //   useEffect(() => {
  //     GetDeviceData().then(res => {
  //       const data = res;
  //       console.log(res[1].deviceName);
  //       setDevices(data)});
  //   },[]);

  //   console.log(devices);

  // useEffect(() => {
  //   fetch("http://localhost:5000/par3")
  //     .then(res => res.json())
  //     .then(data => setTotal(data.length))

  // }, [])
  // console.log(total)

  // useEffect(() => {
  //   async function getDevices() {
  //     const response = await fetch('http://localhost:5000/', {
  //       method: 'GET',
  //       headers: { accept: 'application/json', },
  //     });

  //     if(!response.ok) throw Error('Please reload the app');
  //     const data = await response.json();
  //     setDevices(data);
  //   }

  //   function filterDevice() {
  //     devices.filter(item => item.length > 1).map((device) => (
  //       device.deviceFields.filter(index => index.id === 1 ).map((filteredLink) => {
  //           return filteredLink.type;
  //           // return setDeviceFilter(filteredLink.type);
  //         })
  //     ))
  //   } 

  // //   getDevices();
  //   filterDevice();

  // }, []);

  // console.log(devices[1].deviceName);
  // console.log(DeviceItems[0].title);

  const filteredDevice =  devices.filter(item => item.length > 1).map((device) => (
      device.filter(index => index.id === 1 ).map((filteredLink,index) => {
          return filteredLink.type;
        })
    ))
  

  // console.log(filteredDevice[0]);

   

  return (

    <div className="topnav">
      {/* {devices.filter(item => item.deviceFields.length > 1).map((device) => (
        <>
          {device?.deviceFields.filter(index => index.id === 1 ).map((filteredLink, index) => (
            <NavLink key={index} to={filteredLink.type.toLowerCase()} style={{ background: "white" }}>
              {filteredLink.type}
            </NavLink>
          ))
          }
        </>

      ))} */}

      { filteredDevice.map((filteredItem) => (
        DeviceItems.filter(match => match.title === filteredItem[0]).map((nav, index) => {
             return (
               nav.link === "." ?
                 <NavLink key={index} to={nav.link} style={{ background: "white" }} end>
                   {nav.title}
                 </NavLink> :
                 <NavLink key={index} to={nav.link} style={{ background: "white" }}>
                   {nav.title}
                 </NavLink>
             )
           } )))
        // ))
        }


      {/* <ul>
            { devices.map( (device, index)=> (
              <li key={index}><a href=''>{device.deviceName}</a>
                <ul>
                  { device.deviceFields.map( (field, index)=> (
                  <li key={index}><a href=''>{field.ip}</a></li>
                  ))
                  }
                </ul>
              </li> 
            ))
            } 
          </ul> */}
    </div>



    // <div className="topnav">
    //   {
    //     DeviceItems.title.map((item)=> {
    //       return (
    //       menuItems.item.filter(device => device.length > 1 ).map((nav, index) => {
    //         console.log(nav.title)
    //         return (
    //           nav.link === "." ?
    //             <NavLink key={index} to={nav.title.toLowerCcase()} style={{ background: "white" }} end>
    //               {nav.title}
    //             </NavLink> :
    //             <NavLink key={index} to={nav.link} style={{ background: "white" }}>
    //               {nav.title}
    //             </NavLink>
    //         )
    //       }
    //       ))})}
    // </div>
  )
}

export default Navbar
