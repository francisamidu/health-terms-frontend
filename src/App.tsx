// src/App.tsx

import React from 'react'
import { BrowserRouter as Router } from 'react-router'
import AppRouter from './components/Routing/Router'
import { DarkModeProvider } from '@/contexts/ColorSchemeContext'

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <AppRouter />
      </Router>
    </DarkModeProvider>
  )
}

export default App
