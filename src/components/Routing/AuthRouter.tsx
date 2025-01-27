// src/AuthRouter.tsx

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import VerifyToken from '@/pages/VerifyToken'
import ChangeEmailForToken from '@/pages/ChangeEmail'
import ResetPassword from '@/pages/ResetPassword'
import Layout from '@/components/Auth/Layout'

const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-email" element={<ChangeEmailForToken />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-token" element={<VerifyToken />} />
      </Route>
    </Routes>
  )
}

export default AuthRouter
