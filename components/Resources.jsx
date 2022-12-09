import React, { useState } from 'react'
import {XMarkIcon } from '@heroicons/react/solid'


function Resources({handleResource}) {
  return (
    <div className="bg-white absolute top-[130%] left-0 right-0 bottom-0 h-[40vh] lg:flex gap-44 px-[20%] py-12 text-start hidden justify-cemter border transform transition duration-700 ease-in-out">
        <div className='absolute top-6 left-48 hover:bg-gray-100 rounded-full p-1 transform transition duration-500 ease-out' onClick={handleResource}>
            <h3 className='cursor-pointer font-bold text-gray-400 rounded-full md:hover:border px-2 text-center text-lg'>X</h3>
        </div>
      {/* support */}
      <ul className='flex flex-col gap-4 list-none relative'>
        <li className='font-bold' >Support</li>
        <li className='hover:underline cursor-pointer'>Help Center</li>
        <li className='hover:underline cursor-pointer'>AirCover</li>
        <li className='hover:underline cursor-pointer'>Supporting people with disabilities</li>
        <li className='hover:underline cursor-pointer'>Cancellation options</li>
        <li className='hover:underline cursor-pointer'>Our COVID-19 Response</li>
        <li className='hover:underline cursor-pointer'>Report a neighborhood concern</li>
      </ul>
      {/* support */}
      <ul className='flex flex-col gap-4 list-none relative'>
        <li className=' font-bold'>Community</li>
        <li className='hover:underline cursor-pointer'>Airbnb disaster relief housing</li>
        <li className='hover:underline cursor-pointer'>Combating discrimination</li>

      </ul>
      {/* support */}
      <ul className='flex flex-col gap-4 list-none relative'>
        <li className='font-bold'>Hosting</li>
        <li className='hover:underline cursor-pointer'>Airbnb your home</li>
        <li className='hover:underline cursor-pointer'>AirCover for Hosts</li>
        <li className='hover:underline cursor-pointer'>Explore hosting resources</li>
        <li className='hover:underline cursor-pointer'>Visit our community forum</li>
        <li className='hover:underline cursor-pointer'>How to host resposibily</li>
      </ul>
      {/* support */}
      <ul className='flex flex-col gap-4 list-none relative'>
        <li className='font-bold'>Airbnb</li>
        <li className='hover:underline cursor-pointer'>Newsroom</li>
        <li className='hover:underline cursor-pointer'>Learn about new features</li>
        <li className='hover:underline cursor-pointer'>Letter from our founders</li>
        <li className='hover:underline cursor-pointer'>Careers</li>
        <li className='hover:underline cursor-pointer'>Investors</li>
        <li className='hover:underline cursor-pointer'>Gift Cards</li>
      </ul>
    </div>
  );
}

export default Resources;
