import React, { Children } from 'react'
import Par3 from './3Par'
import StoreOnce from './StoreOnce'
import Hyperv from './Hyper-v'
import VMWare from './VMWare'

export const DeviceItems = [

    {
        link: "3par",
        title: "3PAR",
        component: <Par3 />
    },
    {
        link: "storeOnce",
        title: "StoreOnce",
        component: <StoreOnce />
    },
    {
        link: "hyper-v",
        title: "Hyper-V",
        component: <Hyperv />
    },
    {
        link: "vmware",
        title: "VMWare",
        component: <VMWare />
    }

];



