import React from 'react'
import Highlight from '@/components/Highlight'
import LazyImage from '@/components/LazyImage'

const Features: React.FC = () => {
  return (
    <section className="w-full my-10 p-8 bg-gray-200 ">
      <div className="mx-auto md:w-[85%]">
        <div className="my-4 flex flex-col justify-center  ">
          <div className="w-fit">
            <Highlight
              className="!ml-0"
              title="Valuable Features"
              icon="feature"
            />
          </div>
          <h1 className="font-medium text-5xl my-2">
            Unlock the Value of Intelligent Health Insights
          </h1>
          <h2 className="my-5 text-base w-3/4">
            Discover the power of a smarter way to understand, create, and
            reference medical terms with ease—your gateway to credible knowledge
            and precision.
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-[350px_350px]  lg:grid-cols-8 gap-6  md:max-w-3/4 md:mx-auto">
          <div className="lg:col-span-5 bg-white shadow-md rounded-lg p-6">
            <LazyImage
              alt="Easily Manage Schedules"
              src="/xenity-health.webp"
              height="100%"
              width="auto"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              Easily Manage Schedules And Appointments
            </h3>
            <p className="text-gray-600 mt-2">
              Organize caregiver schedules and balance workloads with a
              drag-and-drop Calendar and Workload view.
            </p>
          </div>

          <div className="lg:col-span-3 bg-white shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <h3 className="text-lg font-bold text-gray-800">
              Manage Patients With Efficiency
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Automate appointment scheduling and track patient info with custom
              fields.
            </p>
            <div className="flex-1 landing-lazy-image-small">
              <LazyImage
                alt="Easily Manage Schedules"
                src="/dummy_600x400_000000_a4f9c1.png"
                height="100%"
                width="auto"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white shadow-md rounded-xl p-6 flex flex-col justify-items-stretch">
            <h3 className="text-lg font-bold text-gray-800">
              Streamline Communication
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Create real-time cross-departmental communication channels
              directly.
            </p>
            <div className="mt-4 flex-1 landing-lazy-image-small">
              <LazyImage
                alt="Streamline Communication"
                src="/dummy_600x400_000000_a4f9c1.png"
                height="100%"
                width="100%"
                effect="opacity"
                wrapperProps={{
                  style: { transitionDelay: '1s' }
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-white shadow-md rounded-xl p-6">
            <LazyImage
              alt="Fortify Financial Wellness"
              src="/xenity-health.webp"
              height="auto"
              width="100%"
              effect="opacity"
              wrapperProps={{
                style: { transitionDelay: '1s' }
              }}
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              Fortify Financial Wellness
            </h3>
            <p className="text-gray-600 mt-2">
              Unlock the power of comprehensive income management to ensure
              financial transparency and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
