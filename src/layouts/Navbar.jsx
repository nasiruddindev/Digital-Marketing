import React from 'react'
import List from '../components/List'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png'
import Image from '../components/Image'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <nav className='py-7.5'>
      <Container>
        <Flex className="justify-between items-center">

          <div>
            <Image src={Logo}/>
          </div>

          <div>
            <ul className='flex gap-x-16'>
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
      </Container>
    </nav>
  )
}

export default Navbar
