import React from 'react'
import { IconContext } from "react-icons";
import { RxDashboard } from 'react-icons/rx'
import { FaRegUserCircle } from 'react-icons/fa';
import { GoServer } from 'react-icons/go'
import { LiaToolsSolid } from 'react-icons/lia'


export const SidebarData = [
    {
        name: "Dashboard",
        icon: <RxDashboard />,
        path: "/"
    },
    {
        name: "Devices",
        icon: <GoServer /> ,
        path: "devices"
    },
    {
        name: "Test",
        icon: <LiaToolsSolid />,
        path: "test"
    },
    {
        name: "Usar",
        icon: <FaRegUserCircle />,
        path: "user"
    }

];

