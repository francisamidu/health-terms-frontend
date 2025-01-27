import Header from '@/components/Dashboard/Header'
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'
import { Outlet } from 'react-router'

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex ml-[20%] mt-[60px]">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
