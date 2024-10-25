import React from 'react'
import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaPlusCircle, FaUsers, FaProductHunt, FaListAlt, FaSignOutAlt } from 'react-icons/fa'

function SideBar() {
  return (
    <div className='flex pl-10 flex-col gap-8'>
      <div className="flex justify-start">
        <img
          src="https://corporate.marksandspencer.com/sites/marksandspencer/files/styles/retina/public/marksandspencer/logos/Intl-Logo.png?itok=yO_fmtf_"
          alt="Logo"
          className="w-28 h-28"
        />
      </div>

      <Link to=''>
        <FaTachometerAlt size={22} className="inline mr-2 " /> Dashboard
      </Link>

      <Link to='/dashboard/create-category'>
        <FaPlusCircle size={22} className="inline mr-2 " /> Create Category
      </Link>

      <Link to='/dashboard/add-product'>
        <FaPlusCircle size={22} className="inline mr-2" /> Create Product
      </Link>

      <Link to='/dashboard/all-users'>
        <FaUsers size={22} className="inline mr-2" /> View All Users
      </Link>

      <Link to='/dashboard/all-products'>
        <FaProductHunt size={22} className="inline mr-2" /> View All Products
      </Link>

      <Link to='/dashboard/all-categories'>
        <FaListAlt size={22} className="inline mr-2" /> View All Categories
      </Link>

      <Link to='/MerchSign'>
        <button className="w-40 bg-transparent text-black py-1 hover:bg-gray-800 flex items-center">
          <FaSignOutAlt size={22} className="inline mr-2" /> Log Out
        </button>
      </Link>
    </div>
  )
}

export default SideBar
