import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 My App</p>
      </footer>
    </>
  )
}

export default Layout
