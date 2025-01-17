import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Clients from './Clients'
import Privacy from './Privacy'
import Features from './Features'
import Navbar from './Navigation'
import FeatureList from './FeatureList'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Clients />
      <Privacy />
      <Features />
      <FeatureList />
    </>
  )
}

export default App
