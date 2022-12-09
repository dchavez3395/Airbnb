import Image from 'next/image'
import {GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon, SearchIcon} from '@heroicons/react/solid'
import { useState } from 'react';


function Header() {
  const [profile, setProfile] = useState(false)
  const handleProfile = () => {
      setProfile(!profile)
};
  return (
    <header className='bg-white z-50 shadow-md sticky top-0 p-5 grid grid-cols-3'>
      <div className='flex cursor-pointer relative my-auto items-center'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png' height={160} width={160} objectFit='contain' objectPosition='left' alt='/' />
      </div>


    <div className='rounded-full items-center py-2 flex md:border-2'>
        <input type="text" className='outline-none bg-transparent flex-grow pl-5 placeholder-gray-400 text-sm text-gray-400'  placeholder='Where to?'/>
        <SearchIcon className='bg-red-400 text-white rounded-full cursor-pointer hidden md:block h-8 w-8 p-2 md:mx-2'/>
    </div>

    <div className='justify-end text-gray-500 flex space-x-4 items-center'>
        <p className='cursor-pointer hidden md:inline'>Airbnb your home</p>
        <GlobeAltIcon className='cursor-pointer h-6' />
        <div className='rounded-full border-2 flex space-x-2 items-center p-2 cursor-pointer hover:shadow-lg transform transition duration-200 ease-out' onClick={handleProfile}>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6' />
            <div className='relative'>
              {profile && (
                <div className='absolute right-0 top-8 bg-white w-[12rem] text-start space-y-2 py-2 border rounded-md'>
                  <p className='hover:backdrop-brightness-90 px-2 py-1'>Sign up</p>
                  <p className='hover:backdrop-brightness-90 px-2 py-1'>Log in</p>
                  <p className='hover:backdrop-brightness-90 px-2 py-1'>Airbnb your home</p>
                  <p className='hover:backdrop-brightness-90 px-2 py-1'>Host an experience</p>
                  <p className='hover:backdrop-brightness-90 px-2 py-1'>Help</p>
                </div>
                )}
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header
