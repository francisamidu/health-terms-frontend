import AppButton from '@/components/Button'
import React, { useState } from 'react'

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Reset password submitted:', { email, token, password })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-50 mt-6 w-full max-w-md bg-white p-6 shadow-md rounded-lg"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Reset Your Password
          </h1>
          <p className="text-gray-600 my-5 text-center max-w-md">
            Enter your email, verification code, and new password to reset your
            account.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border-2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="token"
            className="block text-sm font-medium text-gray-700"
          >
            Verification Code
          </label>
          <input
            type="text"
            id="token"
            placeholder="Enter verification code"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mt-1 w-full border-2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border-2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="mb-4 text-right text-sm text-gray-600">
          Didn't receive a code?{' '}
          <button
            type="button"
            onClick={() => alert('Resending token...')}
            className="text-blue-500 hover:underline"
          >
            Resend Code
          </button>
        </div>

        <AppButton text="Reset Password" variant="form" />
      </form>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          Need help?{' '}
          <a href="/support" className="text-blue-500 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  )
}

export default ResetPassword
