import React from 'react'

const ProCard = ({subTitle,title,text}) => {
  return (
    <div>
      <h4 className='font-bold text-lg font-open text-card'>{subTitle}</h4>
      <h2 className='font-semibold font-open text-[30px] text-card py-5'>{title}</h2>
      <p className='font-lg font-normal font-roboto text-pera w-89'>{text}</p>
    </div>
  )
}

export default ProCard
