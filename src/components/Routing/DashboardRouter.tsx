// src/DashboardRouter.tsx

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import Dashboard from '@/pages/Dashboard'

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={<ProtectedRoute Component={Dashboard} />}
      />
    </Routes>
  )
}

export default DashboardRouter
