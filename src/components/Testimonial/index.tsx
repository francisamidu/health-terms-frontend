import React, { useState } from 'react'
import Highlight from '@/components/Highlight'
import { TestimonialProps } from '@/types/TestimonialProps'

const testimonials: TestimonialProps[] = [
  {
    image: '/woman.png',
    quote: `This pregnancy nutrition app has totally transformed the way I plan meals. The trimester-specific recommendations and easy meal planning tools have made eating healthy during pregnancy so convenient.`,
    name: 'Sarah Mitchell',
    designation: 'First-time Mother, 28 weeks pregnant'
  },
  {
    image: '/woman.png',
    quote: `As a registered dietitian, I highly endorse this app for all my prenatal patients. The nutrient tracking and food safety reminders are exactly what pregnant women need for a safe and healthy pregnancy experience.`,
    name: 'Dr. Emma Rodriguez',
    designation: 'Prenatal Nutrition Specialist, Maternal Health Center'
  },
  {
    image: '/woman.png',
    quote: `The meal planning tools have been a lifesaver during my second pregnancy. Shopping lists and safe food substitutes help me easily enjoy a healthy diet while still allowing me to get my cravings on.`,
    name: 'Jennifer Chen',
    designation: 'Two-time mom, Food Blogger'
  },
  {
    image: '/woman.png',
    quote: `I appreciate how the app alters suggestions based on your trimester. The real-time notifications for food safety and nutrient consumption have helped me make better food choices.`,
    name: 'Lisa Thompson',
    designation: 'Expectant Mother, Group Fitness Instructor'
  },
  {
    image: '/woman.png',
    quote: `As an OB-GYN, I appreciate that this app combines evidence-based nutrition guidelines with functional meal planning aspects. It is exactly what my patients need for pregnancy nutrition guidance.`,
    name: 'Dr. Maya Patel',
    designation: "OB-GYN, Women's Wellness Clinic"
  }
]
const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="dark:bg-gray-800 bg-gray-100 min-h-screen flex flex-col items-center space-y-8 py-12"
      id="testimonials"
    >
      <div className="relative md:px-0 px-4 w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {testimonials.map(({ designation, image, name, quote }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center dark:bg-gray-600 bg-white shadow-md rounded-lg p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-8"
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
                <Highlight
                  title="Testimonial"
                  icon="comment"
                  className="w-fit !ml-0 mb-4"
                />
                <blockquote className="dark:text-gray-200 text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                  “{quote}”
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold dark:text-white text-gray-800">
                    {name}
                  </p>
                  <p className="text-sm dark:text-gray-400">{designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-main-bluish text-white p-2 rounded-full shadow hover:bg-blue-600"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-main-bluish text-white p-2 rounded-full shadow hover:bg-main-dark"
        >
          &gt;
        </button>
      </div>
      <div className="flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-main-bluish' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
