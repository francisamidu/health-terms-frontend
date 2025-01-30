import { ProtectedRoutesProps } from '@/types/ProtectedRoutesProps'
import React from 'react'

const ProtectedRoute: React.FC<ProtectedRoutesProps> = ({ Component }) => {
  return Component ? <Component /> : null
}

export default ProtectedRoute
