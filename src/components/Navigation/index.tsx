import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              HealthTerms
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="/resources" className="text-gray-700 hover:text-blue-600">
              Resources
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-4 mt-4">
              <a
                href="/features"
                className="block text-gray-700 hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="/about"
                className="block text-gray-700 hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="/resources"
                className="block text-gray-700 hover:text-blue-600"
              >
                Resources
              </a>
              <a
                href="/contact"
                className="block text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
              <div className="space-y-4">
                <a
                  href="/login"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="block px-4 py-2 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
