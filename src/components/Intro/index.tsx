import React from 'react'

const Intro: React.FC = () => {
  return (
    <section className="w-full md:mx-auto md:max-w-screen-md flex flex-col justify-center items-center mb-10 mt-32">
      <img
        alt="HealthCo Dashboard"
        src="/xenity-health.webp"
        className="w-full h-auto"
      />
    </section>
  )
}

export default Intro
