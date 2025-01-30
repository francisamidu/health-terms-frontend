// src/App.tsx

import React from 'react'
import { BrowserRouter as Router } from 'react-router'
import AppRouter from './components/routing/Router'
import { DarkModeProvider } from '@/contexts/ColorSchemeContext'
import { AppInformationProvider } from './contexts/AppInformationContext'

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <AppInformationProvider>
        <Router>
          <AppRouter />
        </Router>
      </AppInformationProvider>
    </DarkModeProvider>
  )
}

export default App
