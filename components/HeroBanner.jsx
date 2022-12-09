import Image from 'next/image'
import React from 'react'

function HeroBanner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src='https://links.papareact.com/0fm' layout='fill' className='brightness-90' objectFit='cover' alt='' />
        <div className='w-full text-center absolute top-[40%]'>
            <p className='text-sm sm:text-lg font-[600] text-gray-800'>Flexible? Let us choose your next destination.</p>
            <button className='rounded-full bg-white text-purple-500 shadow-md hover:shadow-xl py-4 px-10 font-bold my-3 active:scale-90 transition-700'>I'm flexible</button>
        </div>
    </div>
  )
}

export default HeroBanner

