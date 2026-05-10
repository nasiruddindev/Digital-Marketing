import React, { useState } from 'react'
import List from '../components/List'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/Logo.png'
import Image from '../components/Image'
import Button from '../components/Button'
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  let [open,setOpen] =useState(false)
  return (
    <nav className='py-7.5'>
      <Container>
        <Flex className="hidden md:flex justify-between items-center">

          <div>
            <Image src={Logo}/>
          </div>

          <div>
            <ul className='flex md:gap-x-8 lg:gap-x-16'>
              <List text="Home"/>
              <List text="About"/>
              <List text="Service"/>
              <List text="Portfolio "/>
              <List text="Price "/>
              <List text="Blog "/>
            </ul>
          </div>

          <div>
            <Button text="Contact Us"/>
          </div>

        </Flex>



        <div className='flex justify-between items-center px-5 md:hidden'>
          <Image src={Logo}/>

          <div onClick={()=>{setOpen (!open)}}>
            {open?<ImCross/>:<IoMenu className='text-3xl'/>}
          </div>
        </div>

        <div>
         { open&&<ul className='flex flex-col bg-blue-100 gap-y-8 py-10 items-center duration-500'>
              <List text="Home"/>
              <List text="About"/>
              <List text="Service"/>
              <List text="Portfolio "/>
              <List text="Price "/>
              <List text="Blog "/>
            </ul>}
        </div>

      </Container>
    </nav>
  )
}

export default Navbar
