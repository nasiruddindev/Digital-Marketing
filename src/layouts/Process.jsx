import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import TitleIcon from '../assets/titleIcon.png'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Grid from '../components/Grid'
import ProCard from '../components/ProCard'

const Process = () => {
  return (
    <section className='py-25'>
      <Container>
        <Image src={TitleIcon} className="mx-auto"/>
        <Title text="Our Creative Process" className="text-center py-5"/>
        <p className='font-normal text-lg text-pera font-roboto text-center w-103 mx-auto'>We Provide digital Experience service to stratups and small businesses</p>

        <Grid className="grid-cols-2 gap-x-7.5 items-center mt-13">
          <div className='bg-[#EBF7E9] p-6 w-[85%] rounded-[20px]'>
            <ProCard subTitle="Step-1" title="Global SEO Research" text="Practical tools and features make it easier to build and manage your site"/>
          </div>
          <div className='h-81 rounded-[20px] bg-gray-400'></div>
          <div className='h-81 rounded-[20px] bg-gray-400'></div>
          <div className='bg-[#D8EAFF] p-6 w-[85%] rounded-[20px] justify-self-end'>
            <ProCard subTitle="Step-2" title="Social Media integration" text="Practical tools and features make it easier to build and manage your site"/>
          </div>
          <div className='bg-[#FBF1EC] p-6 w-[85%] rounded-[20px]'>
            <ProCard subTitle="Step-3" title="Launching the Application" text="Practical tools and features make it easier to build and manage your site"/>
          </div>
          <div className='h-81 rounded-[20px] bg-gray-400'></div>
        </Grid>
      </Container>
    </section>
  )
}

export default Process
