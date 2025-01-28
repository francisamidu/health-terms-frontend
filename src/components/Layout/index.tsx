import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'
import Footer from '../Auth/Footer'

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="md:max-w-screen-lg md:mx-auto md:px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
