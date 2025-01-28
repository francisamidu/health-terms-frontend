import React from 'react'

const Intro: React.FC = () => {
  return (
    <section
      className="w-full md:mx-auto md:max-w-screen-md flex flex-col justify-center items-center mb-10 mt-32"
      id="intro"
    >
      <img
        alt="HealthCo Dashboard"
        src="/xenity-health.webp"
        className="w-5/6 md:w-full h-auto"
      />
    </section>
  )
}

export default Intro
