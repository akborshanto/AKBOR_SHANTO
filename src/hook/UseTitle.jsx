import React from 'react'

const UseTitle = ({heading,desc}) => {
  return (
    <div className='text-center'>
      <h1 className=' text-xl lg:text-4xl font-bold text-red-500 font '>{heading}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default UseTitle
