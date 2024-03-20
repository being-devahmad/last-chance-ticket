import "./App.css"
import React from 'react'
import Events from './components/Events'
import Reviews from './components/Reviews'
import { Navbar } from './components/Navbar'
import HeroSection from './components/HeroSection'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Events />
      <Reviews />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
