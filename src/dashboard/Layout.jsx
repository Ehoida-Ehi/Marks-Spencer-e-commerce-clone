import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function Layout() {
  return (
    <div className='flex'>
      <div className='bg-gradient-to-t from-black via-orange-400 to-pink-500 fixed h-[100vh] w-[20%]'>
        <SideBar/>
      </div>
      <div className='absolute right-0  bg-gray-50 w-[80%] h-[800px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
