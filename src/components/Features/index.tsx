import React from 'react'
import Highlight from '@/components/Highlight'
import LazyImage from '@/components/LazyImage'

const Features: React.FC = () => {
  return (
    <section
      className="w-full my-10 p-8 dark:bg-gray-800 bg-gray-200"
      id="features"
    >
      <div className="mx-auto md:w-[85%]">
        <div className="my-4 flex flex-col justify-center  ">
          <div className="w-fit">
            <Highlight
              className="!ml-0"
              title="Essential Features"
              icon="feature"
            />
          </div>
          <h1 className="font-medium text-4xl md:text-5xl my-2">
            Smart Nutrition Guidance for Every Stage of your Pregnancy
          </h1>
          <h2 className="my-5 text-base w-3/4">
            Simple way to plan, track, and maintain healthy eating habits
            throughout your pregnancy journey—your personal guide to nourishing
            you and your baby.
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-[350px_350px] lg:grid-cols-8 gap-6 md:max-w-3/4 md:mx-auto">
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-items-stretch">
            <div className="flex-1 w-full overflow-hidden">
              <LazyImage
                alt="Smart Trimester-Based Meal Planning"
                className="w-full max-w-full h-auto"
                src="/xenity-health.webp"
              />
            </div>
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">
                Smart Trimester-Based Meal Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Create your own personalized meal plans using our drag-and-drop
                calendar, with trimester-based nutrition recommendations and
                easy recipe adjustments.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Monitor Must-Have Nutrients
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Monitor essential nutrients and receive individualized reminders
                to be nutritionally optimal as well as for your baby.
              </p>
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <LazyImage
                alt="Monitor Must-Have Nutrients"
                className="w-full max-w-full h-auto"
                src="/dummy_600x400_000000_a4f9c1.png"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Smart Food Safety Reminders
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Get real-time food safety reminders when you are pregnant and
                find out safe substitutes for your cravings.
              </p>
            </div>
            <div className="mt-4 flex-1 landing-lazy-image-small w-full overflow-hidden">
              <LazyImage
                alt="Smart Food Safety Reminders"
                className="w-full max-w-full h-auto"
                src="/dummy_600x400_000000_a4f9c1.png"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <div className="flex-1 w-full overflow-hidden">
              <LazyImage
                alt="Smart Shopping & Recipes"
                src="/xenity-health.webp"
                className="w-full max-w-full h-auto"
              />
            </div>
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">
                Smart Shopping & Recipes
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Design smart shopping lists from your menus and locate
                pregnancy-safe recipes that fit your palate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
