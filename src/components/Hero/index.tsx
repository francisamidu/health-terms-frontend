import React, { useState } from 'react'
import Highlight from 'components/Highlight'
import Navbar from 'components/Navigation'

const Hero: React.FC = () => {
  const [title, setTitle] = useState(
    'The best health search tool is out now! 🚀'
  )
  return (
    <>
      <Navbar />
      <section className="w-full h-full flex flex-col justify-center items-center">
        <Highlight title={title} />
      </section>
    </>
  )
}
export default Hero
