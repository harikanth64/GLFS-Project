import React, { Children } from 'react'
import Par3 from './3Par'
import StoreOnce from './StoreOnce'
import Hyperv from './Hyper-v'
import VMWare from './VMWare'

export const DeviceItems = [

    {
        link: "3par",
        index: 1,
        title: "3PAR",
        component: <Par3 />
    },
    {
        link: "storeOnce",
        index: 2,
        title: "StoreOnce",
        component: <StoreOnce />
    },
    {
        link: "hyper-v",
        index: 3,
        title: "Hyper-V",
        component: <Hyperv />
    },
    {
        link: "vmware",
        index: 4,
        title: "VMWare",
        component: <VMWare />
    },
    {
        link: "msa",
        index: 5,
        title: "MSA2060",
        component: <VMWare />
    },
    {
        link: "cloudian",
        index: 6,
        title: "Cloudian",
        component: <VMWare />
    },
    {
        link: "moonshot",
        index: 7,
        title: "Moonshot",
        component: <VMWare />
    },
    {
        link: "nutanix",
        index: 8,
        title: "Nutanix",
        component: <VMWare />
    },
    {
        link: "azurestackhci",
        index: 9,
        title: "Azure Stack HCI",
        component: <VMWare />
    }

];



