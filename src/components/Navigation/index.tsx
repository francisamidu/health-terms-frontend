import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import { Moon02Icon, UserAdd01Icon, UserUnlock01Icon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  const redirect = (path: string) => {
    navigate(path)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        isScrolled
          ? 'fixed top-0 left-0 w-full shadow-md bg-white z-30 border-t-8 border-main-bluish'
          : 'static bg-transparent'
      } transition-all duration-500  p-3`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-main-dark">
              <img
                src="/logo-no-background.svg"
                alt="Health Illustration"
                className="h-2 w-auto sm:h-8 lg:h-7"
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
              icon={<UserUnlock01Icon size={15} />}
              text={'Sign in'}
              onClick={() => redirect('/login')}
            />
            <Button
              className="hover:!bg-main-bluish"
              icon={<UserAdd01Icon size={15} />}
              text={'Get Started'}
              onClick={() => redirect('/signup')}
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
                  Try for free
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
