import React from 'react'
import Highlight from 'components/Highlight'
import IconGenerator from 'components/IconGenerator'

const featureList = [
  {
    icon: 'server-stack',
    title: 'Explore Medical Terms with Ease.',
    description: `Effortlessly create and manage accurate medical terms with detailed, customizable descriptions for diverse audiences.`
  },
  {
    icon: 'glossary',
    title: 'Comprehensive Glossary',
    description: `Explore a rich library of thoroughly organized medical terms designed to help professionals, students, and patients alike`
  },
  {
    icon: 'search',
    title: 'Search Medical Terms',
    description: `Easily find precise, detailed definitions for any medical term using our intuitive and reliable search functionality.`
  }
]
const FeatureList: React.FC = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50">
      <div className="my-4 flex flex-col justify-center items-center mx-auto md:w-3/4  text-center">
        <div className="w-fit">
          <Highlight title="Terms management" icon="terms" />
        </div>
        <h1 className="font-medium text-5xl my-2"></h1>
        <h2 className="my-5 text-base w-3/4"></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {featureList.map((feature) => (
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-evenly">
            <div className="w-12 h-12 bg-blue-100 text-blue-500 flex items-center justify-center rounded-md border-2 border-blue-200 mb-4">
              {<IconGenerator name={feature.icon} />}
            </div>
            <h3 className="text-lg font-semibold text-main-dark">
              {feature.title}
            </h3>
            <p className="text-main-bluish mt-2">{feature.description}</p>
            <a href="#" className="text-blue-500 mt-4 inline-block font-medium">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureList
