import React, { useState } from 'react'
import Highlight from 'components/Highlight'
import Navbar from 'components/Navigation'
import Button from 'components/Button'
import { UserMultiple02Icon } from 'hugeicons-react'

const Hero: React.FC = () => {
  const [title, setTitle] = useState(
    'The best health search tool is out now! 🚀'
  )
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center p-5 mt-28 ">
        <Highlight title={title} className="mt-4" />
      </div>
      <div className="my-4 flex flex-col justify-center items-center mx-auto md:w-3/4  text-center">
        <h1 className="font-medium text-7xl">
          Discover and Understand Medical Terms
        </h1>
        <h2 className="my-5 text-base w-1/2">
          Your trusted resource for concise definitions of medical terms with
          references to peer-reviewed journals.
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Button className="mr-2" text={'Get Started'} href={'/signup'} />
        <Button
          className="ml-2 !bg-white !text-main-dark border-[1px] border-main-dark hover:!text-white hover:!bg-main-dark"
          text={'Contact Sales'}
          href={'/login'}
        />
      </div>
    </>
  )
}
export default Hero
