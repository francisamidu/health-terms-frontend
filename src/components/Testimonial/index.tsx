import React from 'react'
import Highlight from '@/components/Highlight'
import { TestimonialProps } from '@/types/TestimonialProps'

const testimonials: TestimonialProps[] = [
  {
    image: 'https://via.placeholder.com/150',
    quote: `The health terms dashboard has streamlined our terminology management process. It's easier than ever to create, update, and organize complex medical terms for our entire team.`,
    name: 'Dr. Emma Scott',
    designation: 'Medical Terminology Specialist, MediDefine'
  },
  {
    image: 'https://via.placeholder.com/150',
    quote: `We’ve drastically reduced errors in documentation thanks to the real-time validation features. The dashboard ensures that everyone uses standardized and accurate terms across our organization.`,
    name: 'Michael Harris',
    designation: 'Clinical Documentation Manager, HealthSyn Systems'
  },
  {
    image: 'https://via.placeholder.com/150',
    quote: `Our research team saves hours every week using the dashboard’s intuitive interface for managing medical vocabularies. It’s become an invaluable tool for consistency in our data.`,
    name: 'Dr. Aisha Patel',
    designation: 'Research Scientist, BioTerms Institute'
  },
  {
    image: 'https://via.placeholder.com/150',
    quote: `The integration of the dashboard with our existing EHR systems has enhanced our workflow efficiency. We can now standardize terminology usage with minimal disruptions.`,
    name: 'Sarah Lopez',
    designation: 'EHR Integration Specialist, CareFlow Health'
  },
  {
    image: 'https://via.placeholder.com/150',
    quote: `The health terms system’s version control and collaborative features have made it so much easier for multiple departments to work together. We’ve seen a marked improvement in communication and accuracy.`,
    name: 'James Carter',
    designation: 'Project Lead, MedTerms Initiative'
  }
]

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center space-y-8 py-12">
      {testimonials.map(({ designation, image, name, quote }, index) => (
        <div
          className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-8 max-w-4xl mx-auto"
          key={index}
        >
          <div className="relative flex-shrink-0">
            <img
              src={image}
              alt={`${name}'s photo`}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border border-gray-200 shadow-sm"
            />
            <div className="absolute inset-0 w-32 h-32 -z-10 bg-blue-100 rounded-full -translate-x-2 -translate-y-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="bg-blue-50 text-blue-500 font-medium text-sm px-3 py-1 rounded-full w-max mb-4">
              Testimonials
            </div>
            <blockquote className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
              “{quote}”
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">{designation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
