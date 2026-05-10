import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import TitleIcon from '../assets/titleIcon.png'
import Button from '../components/Button'
import BannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='py-10'>
      <Container>
        <Flex className="items-center">
          <div className='w-7/12 '>
          <Image src={TitleIcon}/>
          <h1 className='font-extrabold text-7xl font-open text-primary leading-25'>We Are Digital <span className='text-secondary'>Marketing</span> Agency</h1>
          <p className='pt-5 pb-8 text-[20px] font-normal font-paprika leading-9 text-pera w-142.75'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
          <Button text="Get Free Quoto"/>
          </div>
          <div className='w-5/12'>
          <Image src={BannerImg} className="w-[90%] h-full mx-auto"/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner
