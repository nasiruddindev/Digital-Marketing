import React from 'react'

const Title = ({text,className}) => {
  return (

    <h2 className={`text-5xl font-extrabold font-open text-primary ${className}`}>{text}</h2>
  )
}

export default Title
