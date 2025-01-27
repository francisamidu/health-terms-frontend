import AppButton from '@/components/Button'
import React, { useState } from 'react'

const ChangeEmailForToken: React.FC = () => {
  const [currentEmail, setCurrentEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Change email for token submitted:', { currentEmail, newEmail })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-50 mt-6 w-full max-w-md bg-white p-6 shadow-md rounded-lg"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Update Your Email
          </h1>
          <p className="text-gray-600 my-5 text-center max-w-md">
            Update the email address you want to use for receiving verification
            tokens during login or signup.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="currentEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Current Email Address
          </label>
          <input
            type="email"
            id="currentEmail"
            placeholder="Enter your current email"
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
            className="mt-1 w-full border-2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="newEmail"
            className="block text-sm font-medium text-gray-700"
          >
            New Email Address
          </label>
          <input
            type="email"
            id="newEmail"
            placeholder="Enter your new email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="mt-1 w-full border-2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <AppButton text="Update Email" variant="form" />
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

export default ChangeEmailForToken
