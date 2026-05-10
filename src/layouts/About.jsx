import React from 'react'
import Container from '../components/Container'
import Grid from '../components/Grid'
import AboutImg from '../assets/about.jpg'
import TitleIcon from '../assets/titleIcon.png'
import One from '../assets/1.png'
import Two from '../assets/2.png'
import Three from '../assets/3.png'
import Four from '../assets/4.png'
import Five from '../assets/5.png'
import Six from '../assets/6.png'
import Image from '../components/Image'
import Title from '../components/Title'
import Pera from '../components/Pera'

const About = () => {
  return (
    <section className='py-25'>
      <Container>
        <Grid className="grid-cols-2 gap-x-7.5 items-center justify-between">
          <div className='h-117 max-w-110 bg-red-600 rounded-[60px]'>
            <Image src={AboutImg} className="w-full h-full"/>
          </div>



          <div>
            <Image src={TitleIcon}/>
            <Title text="Who We Are" className="py-4"/>
            <Pera text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified," className="w-110 leading-8"/>

            <Grid className="grid-cols-3 gap-y-10 justify-between mt-6.5">
              <Image src={One}/>
              <Image src={Two}/>
              <Image src={Three}/>
              <Image src={Four}/>
              <Image src={Five}/>
              <Image src={Six}/>

            </Grid>
          </div>



        </Grid>
      </Container>
    </section>
  )
}

export default About
