import Image from 'next/image'
import React from 'react'

function MidCard({img, title}) {
  return (
    <div className='transform transition duration-300 ease-out hover:scale-105 cursor-pointer 2xl:px-12'>
      <div className='w-80 h-80 relative'>
        <Image src={img} layout='fill' className='rounded-xl' alt='' />
      </div>
      <h3 className='mt-3 text-2xl'>{title}</h3>
    </div>
  )
}

export default MidCard
