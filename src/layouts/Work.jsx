import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import TitleIcon from '../assets/titleIcon.png'
import Title from '../components/Title'
import List from '../components/List'
import Grid from '../components/Grid'

const Work = () => {
  return (
    <section className='py-25'>
      <Container>
        <Image src={TitleIcon} className="mx-auto"/>
        <Title text="Work Showcase" className="text-center pt-4"/>
        <ul className='flex gap-x-7.5 justify-center mt-12'>
          <List text="All"/>
          <List text="Digital Mkt"/>
          <List text="Branding"/>
          <List text="Content Mkt"/>
          <List text="Social Media Mkt"/>
        </ul>

        <Grid className=" mt-10 grid-cols-4 gap-7.5">
          <div className='bg-gray-700 h-86 rounded-[20px]'></div>
          <div className='bg-green-600 h-86 rounded-[20px] col-span-2'></div>
          <div className='bg-gray-700 h-86 rounded-[20px]'></div>

        </Grid>
        <Grid className=" mt-7.5 grid-cols-3 gap-7.5">
          <div className='bg-gray-700 h-108 rounded-[20px] '></div>
          <div className='bg-gray-700 h-108 rounded-[20px] '></div>
          <div className='bg-gray-700 h-108 rounded-[20px] '></div>
        </Grid>
      </Container>
    </section>
  )
}

export default Work
