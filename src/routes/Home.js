import React from 'react'
import '../App.css';
import { TbServer2 } from "react-icons/tb";
import { IconContext } from "react-icons";
import { FaServer } from 'react-icons/fa';
import { RiDashboard2Line } from 'react-icons/ri'

function Home() {
  return (
    
    <div>
      <h1>This is Dashboard </h1>
      <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: "2em" }}>

      </IconContext.Provider>
    </div>
  )
}

export default Home
