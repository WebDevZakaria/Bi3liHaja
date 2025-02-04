import React from 'react'
import ImgMediaCard from '../component/ImgMediaCard'
import Testimonial from '../component/Testimonial'
import Team from '../component/Team'
import HeroScreen from '../component/HeroScreen'
import ShowCaractiristic from '../component/ShowCaractiristic'
import Market from '../component/Market'
import BrandImage from '../component/BrandImage'


function HomeScreen() {
  
  return (

    <section>
      <HeroScreen />
      <Market />
      <ImgMediaCard /> 

      <Team />  

      <ShowCaractiristic />
      <Testimonial />   
      
    </section>

  )
}

export default HomeScreen
