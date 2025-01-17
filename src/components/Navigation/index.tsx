import { useState } from 'react'
import Button from 'components/Button'
import { Moon02Icon } from 'hugeicons-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-main-dark">
              <img
                src="/healthco-logo.png"
                alt="Health Illustration"
                className="h-10 w-auto sm:h-8 lg:h-20"
              ></img>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/features"
              className="text-main-bluish hover:text-main-dark"
            >
              Features
            </a>
            <a href="/about" className="text-main-bluish hover:text-main-dark">
              About
            </a>
            <a
              href="/resources"
              className="text-main-bluish hover:text-main-dark"
            >
              Resources
            </a>
            <a
              href="/contact"
              className="text-main-bluish hover:text-main-dark"
            >
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex space-x-4">
            <Button
              className="!bg-white !text-main-dark border-[1px] border-main-dark hover:!text-white hover:!bg-main-bluish"
              text={'Sign in'}
              href={'/login'}
            />
            <Button
              className="hover:!bg-main-bluish"
              text={'Get Started'}
              href={'/signup'}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-main-dark focus:outline-none"
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
                className="block text-gray-700 hover:text-main-dark"
              >
                Features
              </a>
              <a
                href="/about"
                className="block text-gray-700 hover:text-main-dark"
              >
                About Us
              </a>
              <a
                href="/resources"
                className="block text-gray-700 hover:text-main-dark"
              >
                Resources
              </a>
              <a
                href="/contact"
                className="block text-gray-700 hover:text-main-dark"
              >
                Contact
              </a>
              <div className="space-y-4">
                <a
                  href="/login"
                  className="block text-gray-700 hover:text-main-dark"
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
        <Moon02Icon
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 hover:cursor-pointer"
          size={25}
        />
      </div>
    </nav>
  )
}

export default Navbar
