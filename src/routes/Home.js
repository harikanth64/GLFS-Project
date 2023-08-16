import React from 'react'
import '../App.css';
import { TbServer2 } from "react-icons/tb";
import { IconContext } from "react-icons";
import { FaServer } from 'react-icons/fa';
import { RiDashboard2Line } from 'react-icons/ri'
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='mainbody'>
        <h1>Dashboard here...!</h1>
      </div>
    </>
  )
}

export default Home
