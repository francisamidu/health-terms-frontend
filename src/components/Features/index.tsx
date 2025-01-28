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
              title="Valuable Features"
              icon="feature"
            />
          </div>
          <h1 className="font-medium text-4xl md:text-5xl my-2">
            Unlock the Value of Intelligent Health Insights
          </h1>
          <h2 className="my-5 text-base w-3/4">
            Discover the power of a smarter way to understand, create, and
            reference medical terms with ease—your gateway to credible knowledge
            and precision.
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-[350px_350px] lg:grid-cols-8 gap-6 md:max-w-3/4 md:mx-auto">
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-items-stretch">
            <div className="flex-1 w-full overflow-hidden">
              <LazyImage
                alt="Easily Manage Schedules"
                className="w-full max-w-full h-auto"
                src="/xenity-health.webp"
              />
            </div>
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">
                Easily Manage Schedules And Appointments
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Organize caregiver schedules and balance workloads with a
                drag-and-drop Calendar and Workload view.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Manage Patients With Efficiency
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Automate appointment scheduling and track patient info with
                custom fields.
              </p>
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <LazyImage
                alt="Easily Manage Schedules"
                className="w-full max-w-full h-auto"
                src="/dummy_600x400_000000_a4f9c1.png"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Streamline Communication
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Create real-time cross-departmental communication channels
                directly.
              </p>
            </div>
            <div className="mt-4 flex-1 landing-lazy-image-small w-full overflow-hidden">
              <LazyImage
                alt="Streamline Communication"
                className="w-full max-w-full h-auto"
                src="/dummy_600x400_000000_a4f9c1.png"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <div className="flex-1 w-full overflow-hidden">
              <LazyImage
                alt="Fortify Financial Wellness"
                src="/xenity-health.webp"
                className="w-full max-w-full h-auto"
              />
            </div>
            <div className="flex-[0.5]">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">
                Fortify Financial Wellness
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Unlock the power of comprehensive income management to ensure
                financial transparency and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
