import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import AppButton from '@/components/Button'
import { Input } from '@/components/ui/input'
import {
  CustomerSupportIcon,
  Search01Icon as SearchIcon
} from 'hugeicons-react'

const articles = [
  {
    category: 'General',
    items: [
      {
        title: 'Understanding Medical Jargon',
        description: 'Break down complex medical terms into simple language.'
      },
      {
        title: 'Navigating Healthcare Terminologies',
        description:
          'Learn how to efficiently find and understand medical terms.'
      },
      {
        title: 'Educational Insights',
        description:
          'Gain insights into the educational aspects of healthcare terms.'
      }
    ]
  },
  {
    category: 'Account',
    items: [
      {
        title: 'Creating an Account',
        description: 'Step-by-step guide to setting up your account.'
      },
      {
        title: 'Managing Account Settings',
        description:
          'Learn how to update your account preferences and settings.'
      },
      {
        title: 'Account Security',
        description: 'Tips to keep your account secure and protected.'
      }
    ]
  },
  {
    category: 'Profile',
    items: [
      {
        title: 'Updating Your Profile',
        description: 'How to edit your profile information and preferences.'
      },
      {
        title: 'Profile Privacy Settings',
        description: 'Manage who can see your profile and personal information.'
      },
      {
        title: 'Profile Customization',
        description: 'Personalize your profile with custom settings and themes.'
      }
    ]
  }
  // {
  //   category:'Most Asked Questions',
  //   items:[
  //     {
  //       title:'What is a medical term?',
  //       description:'A medical term is a word or phrase used to describe a specific medical concept or condition.'
  //     },
  //     {
  //       title:'How do I search for terms?',
  //       description:'Use the search bar at the top to find specific medical terms quickly.'
  //     },
  //     {
  //       title:'Can I save my favorite terms?',
  //       description:'Yes, you can save terms to your favorites for easy access later.'
  //     }
  //   ]
  // }
]
const SupportCenter: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-content items-center">
          <CustomerSupportIcon size={60} className="mb-3" />
          <h1 className="text-5xl font-bold text-center mb-6">
            How can we help you?
          </h1>
        </div>
        <div className="relative">
          <Input
            placeholder="Enter your search term here ..."
            type="text"
            name="term"
            className="flex-grow p-6 !rounded-sm text-gray-700 dark:text-gray-300 bg-transparent focus-visible:ring-0 border-2 border-gray-100 !shadow-none"
            id="support-search-input"
            autoComplete="off"
          />
          <SearchIcon className="absolute top-1/2 right-0 text-gray-800" />
        </div>

        <h2 className="text-3xl my-4">Top Articles</h2>
        <div className="flex flex-col mb-12">
          {articles.map((article, index) => (
            <React.Fragment key={index}>
              <h3 className="text-md font-semibold my-4">{article.category}</h3>
              {article.items.map((item, index) => (
                <Accordion
                  type="single"
                  collapsible
                  key={index}
                  className="w-full"
                >
                  <AccordionItem value={item.title}>
                    <AccordionTrigger>
                      <h3 className="font-normal mb-2">{item.title}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </React.Fragment>
          ))}
        </div>

        <h2 className="text-3xl mb-4">Most Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              What is a medical term?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A medical term is a word or phrase used to describe a specific
              medical concept or condition.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              How do I search for terms?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use the search bar at the top to find specific medical terms
              quickly.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Can I save my favorite terms?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, you can save terms to your favorites for easy access later.
            </p>
          </div>
          {/* Add more FAQs as needed */}
        </div>

        <h2 className="text-2xl font-bold mb-4">Help by Topic</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn how to use the dashboard effectively.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Search Tips</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover tips for finding the right terms quickly.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Categorization</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore how terms are categorized for easy access.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Educational Insights</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access educational content related to medical terms.
            </p>
          </div>
          {/* Add more topics as needed */}
        </div>
      </div>
    </div>
  )
}

export default SupportCenter
