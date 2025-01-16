import React from 'react'
import Highlight from 'components/Highlight'

const images = [
  '/Gavi-logo.png',
  '/unicef-logo.png',
  '/world-bank.png',
  '/who.svg',
  '/gates-foundation.png'
]
const Clients: React.FC = () => {
  return (
    <>
      <div className="w-fit">
        <Highlight title="Some of our Clients" />
      </div>
      <div className="grid grid-cols-5 gap-3">
        {images.map((image) => (
          <img className="h-auto w-[200px]" key={image} src={image} />
        ))}
      </div>
    </>
  )
}

export default Clients
