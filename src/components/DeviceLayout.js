import React from 'react'
import '../App.css';
import { Outlet, NavLink, useLoaderData } from 'react-router-dom'
import { DeviceItems } from '../routes/Devices/DeviceItems';
import DeviceDropSelect from './DeviceDropSelect';
import Navbar from './Navbar';
import { get3ParData, getStoreOnceData } from '../DeviceApi';

export async function loader() {
  const a3parData = await get3ParData();
  const storeOnceData = await getStoreOnceData();
  // const msaData = getMsaData();;

  // const obj1 = a3parData.concat(storeOnceData);
  // // const obj2 = JSON.parse(storeOnceData);
  // // const obj3 = JSON.parse(msaData);

  const finalObj = [
    a3parData,
    storeOnceData,
  ];
 
  return finalObj

}

function DeviceLayout() {
  // var activeClassName = isActive ? 'active' : '';

  const dataSend = useLoaderData();
  // console.log(dataSend);

  
  return (
    <>
      {/* Using Relative Paths */}
      <Navbar data={[...dataSend]}/>
      <DeviceDropSelect />
      <Outlet />
    </>
  )
}

export default DeviceLayout
