import React from 'react'
import {
  Facebook02Icon as FacebookIcon,
  TwitterIcon,
  Linkedin02Icon as LinkedinIcon
} from 'hugeicons-react'
import AppButton from '../Button'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t  px-6 py-10  border-gray-200 pb-0">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="rounded-md flex items-center justify-start text-lg font-bold">
            <img src="/logo-crop.svg" className="h-8 w-auto sm:h-8 lg:h-7" />
          </div>
          <p className="mt-4 text-gray-700">
            Medisync empowers healthcare professionals and institutions to
            efficiently create, manage, and explore medical knowledge. Your
            go-to dashboard for medical technology and terms.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Explore</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="#about" className="hover:underline">
                About Medisync
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#use-cases" className="hover:underline">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="#encyclopedia" className="hover:underline">
                Medical Encyclopedia
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:underline">
                User Guides
              </a>
            </li>
            <li>
              <a href="#support" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md uppercase font-bold text-gray-800">
            Stay Updated
          </h3>
          <p className="text-gray-600 mt-2">
            Subscribe to get the latest updates on Medisync and medical
            technology trends.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 px-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <AppButton className="!w-full mt-3 rounded-sm" text="Subscribe" />
          </form>
          <div className="mt-8">
            <h4 className="font-semibold text-gray-800">Contact Us</h4>
            <p className="mt-2 text-gray-600">Email: support@medisync.com</p>
            <p className="text-gray-600">Phone: +1 800 123 4567</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600">
                <FacebookIcon size={25} />
              </a>
              <a href="https://facebook.com" className="text-gray-600">
                <TwitterIcon size={25} />
              </a>
              <a href="https://facebook.com" className="text-gray-600">
                <LinkedinIcon size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8">
        <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>© 2025 Medisync. All rights reserved.</p>
          <p>
            <a href="#privacy-policy" className="hover:underline">
              Privacy Policy
            </a>{' '}
            |
            <a href="#terms-of-service" className="ml-2 hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
