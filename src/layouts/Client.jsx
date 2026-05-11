import React from 'react'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Image from '../components/Image'
import TitleIcon from '../assets/titleIcon.png'
import Title from '../components/Title'
import Pera from '../components/Pera'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Client = () => {
  return (
    <section className='py-25'>
      <Container>
        <Grid className="lg:grid-cols-3 md:grid-cols-2 gap-y-10 lg:gap-y-0 gap-7.5">
          <div>
            <Image src={TitleIcon} className="mx-auto md:mx-0"/>
            <Title text="Client Review" className="py-5 text-center md:text-start"/>
            <Pera text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  " className="text-center md:text-start px-5 md:px-0"/>
            <div className='flex justify-center md:justify-start gap-x-5 mt-5'>
              <div className='group bg-secondary p-5 rounded-full border border-transparent hover:bg-transparent hover:border-secondary duration-300'><IoIosArrowBack className='text-lg text-white group-hover:text-secondary duration-300'/></div>




              <div className='group bg-secondary p-5 rounded-full border border-transparent hover:bg-transparent hover:border-secondary duration-300'><IoIosArrowForward className='text-lg text-white group-hover:text-secondary duration-300'/></div>
            </div>
          </div>



          <div className='w-[85%] sm:w-125 md:w-full mx-auto md:mx-0 p-10 bg-[#D8EAFF] rounded-[20px] '>
            <Pera text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>

            <div className='flex items-center gap-x-5 mt-5' >
              <div className='h-23 w-23 rounded-full bg-red-600'></div>
              <div>
                <h4 className='font-semibold font-open text-2xl text-card'>Jane Cooper </h4>
                <p className='font-open font-normal text-lg text-card'>Fashion Designer</p>
              </div>
            </div>
          </div>



          <div className='w-[85%] sm:w-125 md:w-full mx-auto md:mx-0 p-10 shadow-xl rounded-[20px]'>
            <Pera text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>

            <div className='flex items-center gap-x-5 mt-5' >
              <div className='h-23 w-23 rounded-full bg-red-600'></div>
              <div>
                <h4 className='font-semibold font-open text-2xl text-card'>Eleanor Pena</h4>
                <p className='font-open font-normal text-lg text-card'>Architecture</p>
              </div>
            </div>
          </div>

        </Grid>
      </Container>
    </section>
  )
}

export default Client
