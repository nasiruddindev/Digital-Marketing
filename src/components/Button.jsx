import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className={`font-semibold text-base lg:text-lg font-open text-white px-5 lg:px-7 py-2.5 lg:py-3.5 bg-secondary rounded-full border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300`}>{text}</button>
    </div>
  )
}

export default Button
