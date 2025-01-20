import React from 'react'
import AppButton from '../Button'
import { DiscordIcon } from 'hugeicons-react'

const NewsletterCTA: React.FC = () => {
  return (
    <section className="p-10">
      <div className="bg-gradient-to-r from-main-dark to-main-accent text-white rounded-lg p-10 md:flex md:justify-between md:items-center md:max-w-screen-xl mx-auto">
        <div className="mb-6 md:mb-0 md:mr-8">
          <img src="/healthco-logo.png" />
          <p className="text-sm mb-4">
            Stop spending so much time googling medical terms ... Let HealthCo
            do it for you
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text3xl font-semibold">Newsletter</h1>
          <h2 className="">
            Subscribe to our newsletter to get the latest medical terms updates
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 md:w-1/2">
            <input
              type="email"
              placeholder="What's your work email?"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AppButton
              text="Join the #HealthCo community"
              className="bg-blue-600 hover:bg-blue-500 ml-3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterCTA
