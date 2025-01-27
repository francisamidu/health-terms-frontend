import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t px-6 py-6 border-gray-200">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <p>© 2025 Medisync. All rights reserved.</p>
        <div className="mt-2">
          <a href="/" className="hover:underline">
            Home
          </a>{' '}
          |
          <a href="#privacy-policy" className="ml-2 hover:underline">
            Privacy Policy
          </a>{' '}
          |
          <a href="#terms-of-use" className="ml-2 hover:underline">
            Terms of Use
          </a>{' '}
          |
          <a href="#cookie-policy" className="ml-2 hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
