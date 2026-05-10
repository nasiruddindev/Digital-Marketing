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
        <Flex className="flex-wrap md:flex items-center">
          <div className='w-full md:w-7/12 '>
          <Image src={TitleIcon} className="mx-auto md:mx-0"/>
          <h1 className='font-extrabold text-5xl md:text-7xl font-open text-primary leading-15 md:leading-25 text-center md:text-start'>We Are Digital <span className='text-secondary'>Marketing</span> Agency</h1>
          <p className='pt-5 pb-8 text-[20px] font-normal font-paprika leading-9 text-pera text-center md:text-start px-2 md:px-0 md:w-142.75'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
          <div className='text-center md:text-start'><Button text="Get Free Quoto"/></div>
          </div>
          <div className='w-full md:w-5/12 mt-10 md:mt-0'>
          <Image src={BannerImg} className="w-[90%] h-full mx-auto"/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner
