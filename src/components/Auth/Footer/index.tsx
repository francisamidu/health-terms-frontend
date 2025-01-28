import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-800 bg-gray-50 border-t px-6 p-1 border-gray-200 dark:border-gray-700 mt-3">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-300">
        <p className="text-white my-4">
          © 2025 Medisync. All rights reserved.
        </p>
        <div className="my-4">
          <a href="/" className="hover:underline mr-2">
            Home
          </a>
          |
          <a href="/privacy-policy" className="mx-2 hover:underline">
            Privacy Policy
          </a>
          |
          <a href="/terms-of-use" className="mx-2 hover:underline">
            Terms of Use
          </a>
          |
          <a href="/cookie-policy" className="ml-2 hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
