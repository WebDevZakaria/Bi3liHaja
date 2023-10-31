import React from 'react'
import ImgMediaCard from '../component/ImgMediaCard'
import Testimonial from '../component/Testimonial'
import Team from '../component/Team'
import HeroScreen from '../component/HeroScreen'

function HomeScreen() {
  
  return (

    <section>
      <HeroScreen />
      <ImgMediaCard /> 
      <Testimonial />   
      <Team />
    </section>

  )
}

export default HomeScreen
