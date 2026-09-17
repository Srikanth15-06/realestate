import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HomeBG from '../Components/HomeBG'
import HomeSearch from '../Components/HomeSearch'
import OurAgents from '../Components/OurAgents'
import RecentBlog from '../Components/RecentBlog'
import Reviews from '../Components/Reviews'
import FindProperties from '../Components/FindProperties'
import WhatWeOffer from '../Components/WhatWeOffer'
import WhyChooseUs from '../Components/WhyChooseUs'
import AboutUsInNumbers from '../Components/AboutUsInNumbers'


const Home = () => {
  return (
    <div>
      <Header />
      <HomeBG />
      <HomeSearch />
      <WhatWeOffer />
      <WhyChooseUs />
      <div className="pb-[20px]">
        <AboutUsInNumbers />
      </div>
      {/* <FindProperties/> */}
      <Reviews />
      <OurAgents />
      <RecentBlog />
      <Footer />
    </div>
  )
}

export default Home
