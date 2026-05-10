import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import TitleIcon from '../assets/titleIcon.png'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Grid from '../components/Grid'
import Flex from '../components/Flex'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card from '../components/Card'

const Service = () => {
  return (
    <section className='py-25'>
      <Container>
        <Image src={TitleIcon} className="mx-auto"/>
        <Title text="Our Service" className="text-center py-4"/>
        <Pera text="We have been providing great flooring solutions service." className="w-83 text-center mx-auto"/>

        <Grid className="grid-cols-3 gap-x-7.5 mt-13">
          <div className='px-5 py-12 bg-[#EBF7E9] rounded-[20px]'>
              <Card src={Card1} title="Marketing Strategy" text="Social Media has changed the way we interact & do business while creating" link="Read more"/>
          </div>
          <div className='px-5 py-12 bg-[#D8EAFF] rounded-[20px]'>
              <Card src={Card2} title="Social Marketing" text="Social Media has changed the way we interact & do business while creating a new avenue." link="Read more"/>
          </div>
          <div className='px-5 py-12 bg-[#FBF1EC] rounded-[20px]'>
              <Card src={Card3} title="Content Marketing" text="Content Marketing is the other fold of online advertisement. If you are looking to build" link="Read more"/>
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Service
