import React from 'react'
import Highlight from '@/components/Highlight'

const Privacy: React.FC = () => {
  return (
    <section className="w-full mx-auto md:max-w-[1100px] my-10 px-8">
      <div className="my-4 flex flex-col justify-center items-center mx-auto md:w-3/4  text-center">
        <div className="w-fit">
          <Highlight title="No more worries" icon="shield-energy" />
        </div>
        <h1 className="font-medium text-5xl my-2">
          Protecting Your Medical Knowledge with Confidence
        </h1>
        <h2 className="my-5 text-base w-3/4">
          Your trusted platform for securely accessing, managing, and
          referencing medical terms from verified journals—where precision meets
          privacy.
        </h2>
      </div>
    </section>
  )
}

export default Privacy
