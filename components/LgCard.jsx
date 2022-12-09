import Image from 'next/image'
import React from 'react'

const LgCard = ({img, title, description, buttonText}) => {
  return (
    <section className='cursor-pointer relative py-16'>
        <div className='w-full relative h-96'>
            <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl' alt='/' /> 
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='w-64 text-4xl mb-3'>{title}</h3>
            <p>{description}</p>
            <button className='rounded-lg bg-gray-900 text-white text-sm mt-3 py-2 px-4'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LgCard