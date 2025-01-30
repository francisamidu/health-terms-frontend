import React from 'react'
import {
  Search01Icon as SearchIcon,
  SchoolBell01Icon as BellIcon
} from 'hugeicons-react'

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white  w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-2">Welcome, Francis</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">
            Overview
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Medical Terms
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Term Categories
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Insights
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search medical terms..."
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
        <BellIcon size={24} className="text-gray-600 hover:text-blue-500" />
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  )
}

export default DashboardHeader
