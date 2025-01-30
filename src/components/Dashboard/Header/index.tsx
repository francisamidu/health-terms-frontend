import React from 'react'
import {
  Notification03Icon as BellIcon,
  Search01Icon as SearchIcon,
  Calendar02Icon as CalendarIcon
} from 'hugeicons-react'

const DashboardHeader: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-white w-full border-b-2 border-gray-100">
        <div className="grid grid-cols-[30%_50%_20%] ml-2 w-full p-3">
          <h1 className="text-2xl font-normal ml-2 mb-2">Welcome, Francis</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search medical terms..."
              className="pl-10 pr-4 py-2 border w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <div className="flex flex-row items-center justify-end mr-3">
            <CalendarIcon
              size={24}
              className="text-gray-600 hover:text-blue-500 space-x-2 hover:cursor-pointer"
            />
            <BellIcon
              size={24}
              className="text-gray-600 hover:text-blue-500 mx-4 hover:cursor-pointer"
            />
            <img
              src="/avatar-male.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader
