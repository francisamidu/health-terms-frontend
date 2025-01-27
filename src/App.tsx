// src/App.tsx

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/Routing/AppRouter'
import AuthRouter from './components/Routing/AuthRouter'
import DashboardRouter from './components/Routing/DashboardRouter'

const App: React.FC = () => {
  return (
    <Router>
      <AppRouter />
      <AuthRouter />
      <DashboardRouter />
    </Router>
  )
}

export default App
