import React from 'react'
import ChangeEmailForToken from '@/pages/ChangeEmail'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import ResetPassword from '@/pages/ResetPassword'
import Signup from '@/pages/Signup'
import VerifyToken from '@/pages/VerifyToken'
import { Routes, Route } from 'react-router'
import Layout from '../Auth/Layout'
import ProtectedRoute from '../ProtectedRoute'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<ProtectedRoute Component={Home} />} />
      </Route>

      <Route path="auth" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="change-email" element={<ChangeEmailForToken />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-token" element={<VerifyToken />} />
      </Route>

      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
