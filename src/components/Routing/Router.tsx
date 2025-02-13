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
import NutritionLog from '../Dashboard/NutritionLog'
import Recipes from '../Dashboard/Recipes'
import Progress from '../Dashboard/Progress'
import Profile from '../Dashboard/Profile'
import MealPlanner from '../Dashboard/MealPlanner'
import Settings from '../Dashboard/Settings'
import FoodGuide from '../Dashboard/FoodGuide'
import Supplements from '../Dashboard/Supplements'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<ProtectedRoute Component={DashboardHome} />} />
        <Route
          path="food-guide"
          element={<ProtectedRoute Component={FoodGuide} />}
        />
        <Route
          path="meal-planner"
          element={<ProtectedRoute Component={MealPlanner} />}
        />
        <Route
          path="nutrition-log"
          element={<ProtectedRoute Component={NutritionLog} />}
        />
        <Route
          path="progress"
          element={<ProtectedRoute Component={Progress} />}
        />
        <Route
          path="recipes"
          element={<ProtectedRoute Component={Recipes} />}
        />
        <Route
          path="water-tracking"
          element={<ProtectedRoute Component={Supplements} />}
        />
        <Route
          path="supplements"
          element={<ProtectedRoute Component={Supplements} />}
        />
        <Route
          path="recipes"
          element={<ProtectedRoute Component={Recipes} />}
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
