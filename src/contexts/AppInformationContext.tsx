import React, { createContext, useContext, ReactNode } from 'react'

// Define the shape of the context
interface AppInformation {
  name: string
  description: string
}

// Create the context with a default value
const AppInformationContext = createContext<AppInformation | undefined>(
  undefined
)

// Create a provider component
interface AppInformationProviderProps {
  children: ReactNode
}

export const AppInformationProvider: React.FC<AppInformationProviderProps> = ({
  children
}) => {
  const appInfo: AppInformation = {
    name: 'MediSync',
    description:
      'A modern and intuitive platform designed to simplify access to healthcare terminologies.'
  }

  return (
    <AppInformationContext.Provider value={appInfo}>
      {children}
    </AppInformationContext.Provider>
  )
}

// Custom hook to use the AppInformationContext
export const useAppInformation = (): AppInformation => {
  const context = useContext(AppInformationContext)
  if (!context) {
    throw new Error(
      'useAppInformation must be used within an AppInformationProvider'
    )
  }
  return context
}
