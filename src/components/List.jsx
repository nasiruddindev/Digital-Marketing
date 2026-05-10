import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-lg font-semibold text-primary font-open hover:text-secondary duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default List
