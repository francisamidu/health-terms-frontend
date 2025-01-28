import React, { createContext, useState, useEffect, useContext } from 'react'

// Define the shape of the context
interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

// Create the context with a default value
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
)

// Create a provider component
export const DarkModeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem('darkMode')
    if (savedPreference) {
      return savedPreference === 'enabled'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Apply or remove the 'dark' class on document element based on state
    document.documentElement.classList.toggle('dark', isDarkMode)
    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled')
  }, [isDarkMode])

  useEffect(() => {
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update state if no manual preference is set
      if (!localStorage.getItem('darkMode')) {
        setIsDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

// Custom hook to use the DarkModeContext
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
