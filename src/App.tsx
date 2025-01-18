import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Login from '@/pages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Home from './pages/Home'
import Signup from './pages/Signup'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard/*"
            element={<ProtectedRoute Component={Dashboard} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
