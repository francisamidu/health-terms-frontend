import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Clients from './Clients'
import Privacy from './Privacy'
import Features from './Features'
import Navbar from './Navigation'
import FeatureList from './FeatureList'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Intro />
      <Clients />
      <Privacy />
      <Features />
      <FeatureList />
    </BrowserRouter>
  )
}

export default App
