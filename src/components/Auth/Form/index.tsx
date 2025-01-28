import React from 'react'
import AppButton from '../../Button'
import { GoogleIcon, Facebook01Icon } from 'hugeicons-react'
import SocialButton from '../../Button/SocialButton'

interface AuthFormProps {
  type: 'login' | 'signup'
}

const Form: React.FC<AuthFormProps> = ({ type }) => {
  const isLogin = type === 'login'

  return (
    <form className="mt-6 w-full max-w-md border-2 border-gray-50 dark:border-gray-700 bg-white dark:bg-gray-700 p-10 shadow-md rounded-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {type == 'login'
            ? ' Welcome back to Medisync'
            : ' Welcome to Medisync'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Continue with</p>
      </div>
      <div className="flex flex-row justify-center my-4 gap-4">
        <SocialButton socialType="google" callback={() => {}} />
        <SocialButton socialType="facebook" callback={() => {}} />
      </div>

      <div className="my-4 text-center text-sm text-gray-500 dark:text-gray-300">
        or Continue with Email
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="dark:text-gray-300 mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="dark:text-gray-300 mt-1 w-full rounded-md border-2  border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {isLogin && (
        <div className="mb-4 flex justify-between items-center text-sm text-gray-600">
          <div>
            <input
              type="checkbox"
              id="remember-me"
              className="rounded border-gray-300 text-blue-500"
            />
            <label htmlFor="remember-me" className="dark:text-gray-300 ml-2">
              Remember me
            </label>
          </div>
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
      )}

      {/* Submit Button */}
      <AppButton text={isLogin ? 'Sign in' : 'Sign up'} variant="form" />
    </form>
  )
}

export default Form
