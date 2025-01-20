import React from 'react'
import AppButton from '../Button'

const Footer = () => {
  return (
    <div className="mb-6 md:mb-0 md:mr-8">
      <h2 className="text-2xl font-bold mb-2">Stay Updated!</h2>
      <p className="text-sm mb-4">
        Subscribe to our newsletter to get the latest updates and feature
        releases. Join the community to connect with others.
      </p>
      <div className="flex flex-row items-center">
        <img
          alt="Discord logo"
          src="/discord-logo.svg"
          width={50}
          height={50}
        />
        <AppButton
          text="Join the #HealthCo community"
          className="bg-blue-600 hover:bg-blue-500 ml-3"
        />
      </div>
    </div>
  )
}

export default Footer
