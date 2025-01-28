import { Routes, Route } from 'react-router'
import React from 'react'

import ChangeEmailForToken from '@/pages/ChangeEmail'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import ResetPassword from '@/pages/ResetPassword'
import Signup from '@/pages/Signup'
import VerifyToken from '@/pages/VerifyToken'
import FAQ from '@/pages/FAQ'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Contact from '@/pages/Contact'

import AuthLayout from '../Auth/Layout'
import Layout from '../Layout'
import ProtectedRoute from '../ProtectedRoute'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<ProtectedRoute Component={Home} />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="change-email" element={<ChangeEmailForToken />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-token" element={<VerifyToken />} />
      </Route>

      <Route index element={<Home />} />
      <Route element={<Layout />}>
        {/* <Route path="terms-of-use" element={<Terms />} /> */}
        <Route path="contact-us" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="faq" element={<FAQ />} />
        {/* <Route path="cookie-policy" element={<NotFound />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
