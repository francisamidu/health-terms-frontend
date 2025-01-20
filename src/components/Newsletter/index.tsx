import React from 'react'
import AppButton from '../Button'
import { DiscordIcon } from 'hugeicons-react'

const NewsletterCTA: React.FC = () => {
  return (
    <section className="p-10">
      <div className="bg-gradient-to-r from-main-dark to-main-accent text-white rounded-lg p-10 md:flex md:justify-between md:items-center md:max-w-screen-lg mx-auto">
        <div className="mb-6 md:mb-0 md:mr-8 w-2/5">
          <h1 className="text-3xl font-semibold">Newsletter</h1>
          <h2 className="my-3">
            Subscribe to our newsletter to get the latest medical terms updates
          </h2>
        </div>

        <div className="flex w-4/5">
          <input
            type="email"
            placeholder="What's your work email?"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-1"
          />
          <AppButton
            text="Subscribe"
            className="bg-blue-600 hover:bg-blue-500"
          />
        </div>
      </div>
    </section>
  )
}

export default NewsletterCTA
