import AuthForm from '@/components/AuthForm'
import React from 'react'

const Signup: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <AuthForm type="signup" />
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup
