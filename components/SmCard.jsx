import Image from 'next/image'
import React from 'react'

const NearbyCard = ({img, location, distance}) => {
  return (
    <div className='rounded-xl cursor-pointer m-2 mt-5 flex space-x-4 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'> 
        <div className='w-16 h-16 relative'>
            <Image src={img} layout='fill' className='rounded-lg' alt='' />
        </div>
        <div className=''>
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export default NearbyCard