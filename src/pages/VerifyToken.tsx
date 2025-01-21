import React, { useState } from 'react'

const VerifyTokenPage: React.FC = () => {
  const [token, setToken] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Token submitted:', token)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <h1 className="text-2xl font-bold text-gray-800">Verify Your Identity</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Enter the verification code sent to your email or phone to complete the
        process.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 w-full max-w-md bg-white p-6 shadow-md rounded-lg"
      >
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
            placeholder="Enter your code"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 text-right text-sm text-gray-600">
          Didn’t receive a code?{' '}
          <button
            type="button"
            onClick={() => alert('Resending token...')}
            className="text-blue-500 hover:underline"
          >
            Resend Code
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 py-2 text-white text-sm font-medium hover:bg-blue-600"
        >
          Verify Code
        </button>
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

export default VerifyTokenPage
