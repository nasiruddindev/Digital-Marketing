import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import TitleIcon from '../assets/titleIcon.png'
import Title from '../components/Title'
import Grid from '../components/Grid'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
    <section className='py-25'>
      <Container>
        <Image src={TitleIcon} className="mx-auto"/>
        <Title text="Our Creative Process" className="text-center py-5"/>
        <p className='font-normal text-lg text-pera font-roboto text-center w-103 mx-auto'>We Provide digital Experience service to stratups and small businesses</p>

        <Grid className="grid-cols-3 gap-7.5 mt-13">

          <div className='rounded-[20px] overflow-hidden shadow-xl'>
            <BlogCard title="How to Be Ahead of Stock Changes" text="By John  - 5 Comments" link="Read more"/>
          </div>


          <div className='rounded-[20px] overflow-hidden shadow-xl'>
            <BlogCard title="Online Reputation And Management" text="By Amin  - 10 Comments   " link="Read more"/>
          </div>


          <div className='rounded-[20px] overflow-hidden shadow-xl'>
            <BlogCard title="Tips To Move Your Project More Forward
            " text="By John  - 5 Comments" link="Read more"/>
          </div>

        </Grid>
      </Container>
    </section>
  )
}

export default Blog
