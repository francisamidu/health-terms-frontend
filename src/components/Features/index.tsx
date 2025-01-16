import React from 'react'
import Highlight from 'components/Highlight'

const Features: React.FC = () => {
  return (
    <section className="w-full my-10 p-8 bg-gray-200">
      <div className="my-4 flex flex-col justify-center mx-auto md:w-3/4 ">
        <div className="w-fit">
          <Highlight
            className="ml-0"
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
    </section>
  )
}

export default Features
