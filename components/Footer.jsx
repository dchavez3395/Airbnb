import React, { useState } from 'react'
import {GlobeAltIcon} from '@heroicons/react/solid'
import {ChevronUpIcon} from "@heroicons/react/outline";
import Resources from "../components/Resources";

const Footer = () => {
    const [resource, setResource] = useState(false)
    const handleResource = () => {
        setResource(!resource)
  };
  return (
    <div className='flex flex-col gap-2 lg:flex-row justify-between lg:p-5 py-5 border text-center'>
        <div className='flex lg:gap-4 flex-col lg:flex-row '>
            <p className='text-lg lg:text-sm'>© 2022 Airbnb, Inc</p>
            <ul className='flex space-x-4 flex-col lg:flex-row'>
                <li className='hover:underline cursor-pointer text-lg lg:text-sm'>Privacy</li>
                <li className='hover:underline cursor-pointer text-lg lg:text-sm'>Terms</li>
                <li className='hover:underline cursor-pointer text-lg lg:text-sm'>Sitemap</li>
                <li className='hover:underline cursor-pointer text-lg lg:text-sm'>Destinations</li>
            </ul>
        </div>

        <div className='flex space-x-4 flex-col lg:flex-row'>
            <div className='flex gap-2 m-auto'>
                <GlobeAltIcon className='cursor-pointer h-6' />
                <p className='hover:underline cursor-pointer text-lg lg:text-sm'>English (US)</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-2'>
                <p className='hover:underline cursor-pointer text-lg lg:text-sm'>$ CAD</p>
                <p className='lg:flex gap-2 hover:underline cursor-pointer text-lg lg:text-sm hidden'>
                    Support & Resources
                    <ChevronUpIcon className="h-4 w-4 cursor-pointer" onClick={handleResource} />
                </p>
                
            </div> 
        <div>
            {resource && (
                <Resources handleResource={handleResource} />
                )}
            </div>
        </div>
    </div>
  )
}

export default Footer