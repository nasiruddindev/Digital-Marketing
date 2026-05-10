import React from 'react'
import Image from './Image'

const BlogCard = ({src,title,text,link,className}) => {
  return (
    <div>
      <Image src={src} className="w-full h-60 bg-gray-500"/>
      <div className='p-7.5'>
        <h3 className='font-medium font-work  text-2xl text-[#413F45] '>{title}</h3>
      <p className='font-normal text-lg font-roboto text-[#474747] pb-7.5 pt-4'>{text}</p>
      <p className='font-open font-bold text-lg text-card'>{link}</p>
      </div>
    </div>
  )
}

export default BlogCard
