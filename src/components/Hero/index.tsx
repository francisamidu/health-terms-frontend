import React, { useState } from 'react'
import Highlight from '@/components/Highlight'
import Button from '@/components/Button'
import { UserAdd01Icon, Mail01Icon } from 'hugeicons-react'
import { useNavigate } from 'react-router'
const Hero: React.FC = () => {
  const navigate = useNavigate()
  const redirect = (path: string) => {
    navigate(path)
  }
  const [title, _] = useState('The best health search tool is out now! 🚀')
  return (
    <section>
      <div
        className="w-full h-full flex flex-col justify-center items-center p-5 mt-5 md:mt-14"
        id="hero"
      >
        <Highlight title={title} className="mt-4" />
      </div>
      <div className="my-4 flex flex-col justify-center items-center mx-auto md:w-3/4 px-4 md:px-0 text-center">
        <h1 className="font-medium md:text-7xl text-4xl">
          Discover and Understand Medical Terms
        </h1>
        <h2 className="my-5 text-base w=3/4 md:w-1/2">
          Your trusted resource for concise definitions of medical terms with
          references to peer-reviewed journals.
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Button
          className="mr-2 hover:!bg-main-bluish"
          icon={<UserAdd01Icon size={15} />}
          text={'Get Started'}
          onClick={() => redirect('/auth/signup')}
        />
        <Button
          className="ml-2 !bg-white !text-main-dark border-[1px] border-main-dark hover:!text-white hover:!bg-main-bluish"
          icon={<Mail01Icon size={15} />}
          text={'Contact Sales'}
          onClick={() => redirect('/contact-us')}
        />
      </div>
    </section>
  )
}
export default Hero
