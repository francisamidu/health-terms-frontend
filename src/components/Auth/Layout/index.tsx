import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer'

const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
