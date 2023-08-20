import React, { useState, children } from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { sidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className='sidebar' style={{ width: isOpen ? "250px" : "50px" }} >
                <div className='top_section'>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>GLFS METERING</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
                        <FiMenu onClick={toggle} />
                    </div>
                </div>
                <div className='container-fluid'>
                    {
                        SidebarData.map((val, key) => (
                            <Link to={val.path} key={key} className='link'>
                                <div className='icon'>{val.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className='link_name'>{val.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            {/* <main>{children}</main> */}
        </div >
    )
}

export default Sidebar
