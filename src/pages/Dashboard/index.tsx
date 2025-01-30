import Header from '@/components/Dashboard/Header'
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'
import { Outlet } from 'react-router'

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-[20%_80%]">
        <Sidebar />
        <main className="col-start-2 col-end-3 flex flex-col items-center">
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
