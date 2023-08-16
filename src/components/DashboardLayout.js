import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header'
import Dashboard from '../routes/Home/Dashboard'

function DashboardLayout() {
  return (
    <div className='mainbody'>

        <h3>This is the Dashboard Layout</h3>

    </div>
  )
}

export default DashboardLayout
