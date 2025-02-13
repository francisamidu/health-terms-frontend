import Header from '@/components/Dashboard/Header'
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'
import { Outlet } from 'react-router'

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-[20%_80%]">
        <Sidebar />
        <main className="col-start-2 col-end-3 flex flex-col relative">
          <Header />
          <section className="mt-16 pl-2">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
