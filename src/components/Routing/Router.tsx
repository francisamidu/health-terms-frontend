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
import SupportCenter from '@/pages/SupportCenter'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Contact from '@/pages/Contact'

import AuthLayout from '../Auth/Layout'
import Layout from '../Layout'
import DashboardHome from '../Dashboard/Home'
import ProtectedRoute from '../ProtectedRoute'
import Categories from '../Dashboard/Categories'
import Favorites from '../Dashboard/Favorites'
import Insights from '../Dashboard/Insights'
import Profile from '../Dashboard/Profile'
import SearchTerms from '../Dashboard/SearchTerms'
import Settings from '../Dashboard/Settings'
import Terminology from '../Dashboard/Terminology'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<ProtectedRoute Component={DashboardHome} />} />
        <Route
          path="terminology"
          element={<ProtectedRoute Component={Terminology} />}
        />
        <Route
          path="search-terms"
          element={<ProtectedRoute Component={SearchTerms} />}
        />
        <Route
          path="categories"
          element={<ProtectedRoute Component={Categories} />}
        />
        <Route
          path="insights"
          element={<ProtectedRoute Component={Insights} />}
        />
        <Route
          path="favorites"
          element={<ProtectedRoute Component={Favorites} />}
        />
        <Route
          path="profile"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="settings"
          element={<ProtectedRoute Component={Settings} />}
        />
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
        <Route path="support-center" element={<SupportCenter />} />
        {/* <Route path="cookie-policy" element={<NotFound />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
