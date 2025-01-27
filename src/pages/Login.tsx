import React from 'react'
import AuthForm from '@/components/Auth/Form'

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <AuthForm type="login" />
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Not registered yet?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
