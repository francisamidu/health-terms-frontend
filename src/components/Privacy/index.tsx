import React from 'react'
import Highlight from '@/components/Highlight'

const Privacy: React.FC = () => {
  return (
    <section
      className="w-full mx-auto md:max-w-[1100px] my-10 px-8"
      id="privacy"
    >
      <div className="my-4 flex flex-col justify-center items-center mx-auto md:w-3/4  text-center">
        <div className="w-fit">
          <Highlight title="Eat for Two, Confidently" icon="nutrition" />
        </div>
        <h1 className="font-medium text-5xl my-2">
          Supporting Your Pregnancy with Smart Nutrition
        </h1>
        <h2 className="my-5 text-base w-3/4">
          Your reliable guide to safe, balanced nutrition throughout
          pregnancy—where expert recommendations meet easy-to-follow meal plans.
        </h2>
      </div>
    </section>
  )
}

export default Privacy
