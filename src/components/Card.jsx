import React from 'react'
import Image from './Image'
import Pera from './Pera'

const Card = ({src,title,text,link,className
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image src={src}/>
      <h4 className='text-[30px] font-semibold font-open text-card pt-7 pb-5'>{title}</h4>
      <Pera text={text} className="w-64 text-center"/>
      <p className='text-lg font-bold font-open text-card pt-5'>{link}</p>
    </div>
  )
}

export default Card
