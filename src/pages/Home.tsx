import React from 'react'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Clients from '@/components/Clients'
import Privacy from '@/components/Privacy'
import Features from '@/components/Features'
import Navbar from '@/components/Navigation'
import FeatureList from '@/components/FeatureList'
import Testimonials from '@/components/Testimonial'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Clients />
      <Privacy />
      <Features />
      <FeatureList />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
