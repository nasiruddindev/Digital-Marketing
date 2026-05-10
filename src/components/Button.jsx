import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className={`font-semibold text-lg font-open text-white px-7 py-3.5 bg-secondary rounded-full border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300`}>{text}</button>
    </div>
  )
}

export default Button
