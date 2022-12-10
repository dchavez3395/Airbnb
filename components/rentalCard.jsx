import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const rentalCard = ({img, location, title, description, star, price, total}) => {
  return (
    <div className='flex cursor-pointer px-2 py-7 border-b first:border-t hover:shadow-lg hover:opacity-80 pr-4 transition duration-200 ease-out'>
        <div className='w-40 md:w-80 relative h-24 md:h-52 flex-shrink-0'>
            <Image src={img} layout='fill' className='rounded-xl' alt='' />
        </div>
        <div className='pl-5 flex flex-col flex-grow'>
            <div className='justify-between flex'>
                <p>{location}</p>
                <HeartIcon className='cursor-pointer h-7 hover:text-red-500' />
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='w-10 border-b pt-2' />
            <p className='text-gray-500 text-sm flex-grow pt-2'>{description}</p>
            <div className='pt-5 flex justify-between items-end'>
                <p className='items-center flex'><StarIcon className='text-red-400 h-5' />{star}</p>
                <div>
                    <p className='font-semibold text-lg lg:text-2xl pb-2'>{price}</p>
                    <p className='font-extralight text-right'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default rentalCard