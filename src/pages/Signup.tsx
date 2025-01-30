import AuthForm from '@/components/Auth/Form'
import React from 'react'

const Signup: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:border-gray-700  dark:bg-gray-800 px-4">
      <AuthForm type="signup" />
      <div className="mt-4 text-sm text-gray-600">
        <p className="dark:text-gray-300">
          Already have an account?{' '}
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup
