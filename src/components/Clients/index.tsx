import React from 'react'

const images = [
  '/Gavi-logo.png',
  '/unicef-logo.png',
  '/world-bank.png',
  '/who.svg',
  '/gates-foundation.png'
]
const Clients: React.FC = () => {
  return (
    <section
      className="w-full mx-auto md:max-w-[1100px] my-20 px-8"
      id="clients"
    >
      <div className="grid place-items-center grid-cols-5 gap-3">
        {images.map((image) => (
          <img className="h-auto w-[200px]" key={image} src={image} />
        ))}
      </div>
    </section>
  )
}

export default Clients
