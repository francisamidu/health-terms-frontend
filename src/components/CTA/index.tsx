import React from 'react'
import AppButton from '../Button'

const CTA: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center p-10 bg-[#80b3c6]"
      id="cta"
    >
      <div className="md:p-8 md:max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Join for free today.</h2>
        <p className="mb-6">
          Empower your team with the ultimate health terms dashboard that
          simplifies management of medical terminology.
        </p>
        <div className="flex items-center rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Work email."
            className="flex-1 px-4 py-2 md:h-11 h-10 outline-none"
          />
          <AppButton className="!rounded-none" text="Create account" />
        </div>
        <ul className="flex justify-center space-x-6 mt-4 text-sm">
          <li className="flex items-center">
            <span className="mr-2">✔</span>20 free credits
          </li>
          <li className="flex items-center">
            <span className="mr-2">✔</span>No credit card required
          </li>
          <li className="flex items-center">
            <span className="mr-2">✔</span>Works with LinkedIn
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CTA
