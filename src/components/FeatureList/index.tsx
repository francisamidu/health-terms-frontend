import React from 'react'
import Highlight from '@/components/Highlight'
import IconGenerator from '@/components/IconGenerator'

const featureList = [
  {
    icon: 'meal-plan',
    title: 'Smart Meal Planning',
    description:
      'Create personalized pregnancy meal plans with our simple planning tools.'
  },
  {
    icon: 'nutrition-track',
    title: 'Nutrient Tracking',
    description:
      'Monitor essential pregnancy nutrients with smart tracking and alerts.'
  },
  {
    icon: 'food-safety',
    title: 'Food Safety Alerts',
    description:
      'Stay up-to-date on food safety with real-time advice and notifications.'
  }
]

const FeatureList: React.FC = () => {
  return (
    <section
      className="p-6 md:p-12 dark:bg-gray-800 bg-gray-50"
      id="feature-list"
    >
      <div className="md:w-[85%] mx-auto ">
        <div className="my-4 flex flex-col justify-center  ">
          <div className="w-fit">
            <Highlight
              className="!ml-0"
              title="Nutrition Tracking"
              icon="nutrition-tracking"
            />
          </div>
          <h1 className="font-medium text-4xl md:text-5xl my-2">
            Manage all your medical terms in one place.
          </h1>
          <h2 className="my-5 text-base w-3/4">
            Experience a smarter way to manage, create, and explore medical
            terms—your trusted gateway to accurate knowledge and seamless
            understanding.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {featureList.map((feature) => (
            <div
              key={feature.title}
              className="dark:bg-gray-700 bg-white shadow-md rounded-2xl p-6 flex flex-col justify-evenly"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-500 flex items-center justify-center rounded-md border-2 border-blue-200 mb-4">
                {<IconGenerator name={feature.icon} />}
              </div>
              <h3 className="text-lg font-semibold text-main-dark dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-main-bluish my-3 dark:text-gray-400">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-blue-500 mt-4 inline-block font-medium"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureList
