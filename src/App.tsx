// src/App.tsx

import React from 'react'
import { BrowserRouter as Router } from 'react-router'
import AppRouter from './components/Routing/Router'

const App: React.FC = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
