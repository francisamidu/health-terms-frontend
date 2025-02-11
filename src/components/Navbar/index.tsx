import { useState, useEffect } from 'react'
import { Moon02Icon } from 'hugeicons-react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        isScrolled
          ? 'fixed top-0 left-0 w-full shadow-md bg-white z-30 border-t-4 border-main-bluish'
          : 'static bg-transparent'
      } transition-all duration-500 p-3`}
    >
      <div className="container mx-auto sm:px-6 relative">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-main-dark">
            <img
              src="/logo-crop.svg"
              alt="Health Illustration"
              className="h-5 w-auto sm:h-12 lg:h-7"
            />
          </a>

          <div className="hidden md:flex space-x-6">
            <a
              href="/privacy-policy"
              className="text-main-bluish hover:text-main-dark"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="text-main-bluish hover:text-main-dark"
            >
              Terms of Use
            </a>
            <a href="/faq" className="text-main-bluish hover:text-main-dark">
              FAQ
            </a>
            <a
              href="/cookie-policy"
              className="text-main-bluish hover:text-main-dark"
            >
              Cookie Policy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-main-dark focus:outline-none">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <Moon02Icon
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 hover:cursor-pointer"
          size={25}
        />
      </div>
    </nav>
  )
}

export default Navbar
