import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Reviews from '../Components/Reviews'
import AboutDetails from '../Components/AboutDetails'
import AboutBg from '../Components/AboutBg'
import AboutInDetail from '../Components/AboutInDetail'

const About = () => {
  return (
    <div>
      <Header/>
      <AboutBg/>
      <AboutInDetail/>
      <AboutDetails/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default About
