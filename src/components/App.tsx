import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Clients from './Clients'
import Privacy from './Privacy'
import Features from './Features'

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Clients />
      <Privacy />
      <Features />
    </>
  )
}

export default App
