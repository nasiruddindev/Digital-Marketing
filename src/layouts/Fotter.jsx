import React from 'react'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import FotterList from '../components/FotterList'

const Fotter = () => {
  return (
    <section className='py-25'>
      <Container>
        <Grid className="grid-cols-5 gap-7.5">
          <div className='col-span-2'>
            <Image src={Logo}/>
            <p className='text-lg font-normal text-pera font-nunito pt-11'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
          </div>


          <div>
            <h3 className='font-semibold font-open text-2xl text-[#413F45] pb-12'>Features</h3>
            <FotterList text="Home"/>
            <FotterList text="About"/>
            <FotterList text="Benifit"/>
            <FotterList text="Pricing"/>
            <FotterList text="Blog"/>
          </div>

          <div>
            <h3 className='font-semibold font-open text-2xl text-[#413F45] pb-12'>Product</h3>
            <FotterList text="Company Growth"/>
            <FotterList text="Time Tracking"/>
          </div>
          <div>
            <h3 className='font-semibold font-open text-2xl text-[#413F45] pb-12'>Support</h3>
            <FotterList text="Customer Service"/>
            <FotterList text="Accessbility"/>
            <FotterList text="Contact Us"/>
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Fotter
