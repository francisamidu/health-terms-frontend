import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex ml-[20%] mt-[60px]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default Dashboard
