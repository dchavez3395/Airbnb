import Image from 'next/image'
import {GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon, SearchIcon} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'


function Header({placeholder}) {
  const [profile, setProfile] = useState(false)
  const handleProfile = () => {
      setProfile(!profile)
};

const resetInput = () => {
  setSeachInput("")
}

const handleSelect = (ranges) => {
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}

const [searchInput, setSeachInput] = useState('')
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [numberOfGuests, setNumberGuests] = useState(1)
const router = useRouter();

const selectionRange = {
  startDate: startDate,
  endDate:endDate,
  key: 'selection'
}

const search = () => {
  router.push({
    pathname: '/search',
    query: {
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      numberOfGuests,
    }
  })
}

  return (
    <header className='bg-white z-50 shadow-md m-auto justify-center items-center sticky top-0 p-5 grid grid-cols-3'>
      <div onClick={() => router.push("/")} className='flex cursor-pointer relative my-auto items-center'>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png' height={160} width={160} objectFit='contain' objectPosition='left' alt='/' />
      </div>
    <div className='rounded-full items-center py-2 flex md:border-2'>
        <input type="text" value={searchInput} onChange={(e) => setSeachInput(e.target.value)} className='outline-none bg-transparent flex-grow pl-5 placeholder-gray-400 text-sm text-gray-400'  placeholder={placeholder || 'Where to?'}/>
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
    {searchInput && (
          <div className='mx-auto flex flex-col col-span-3 py-4'>
            <DateRangePicker ranges={[selectionRange]} rangeColors={['#fd5b61']} minDate={new Date()} onChange={handleSelect} />
            <div className='mb-4 border-b items-center flex'>
              <h2 className='font-semibold flex-grow text-2xl'>Number of Guests</h2>
              <UsersIcon className='h-5' />
              <input type="number" value={numberOfGuests} onChange={(e) => setNumberGuests(e.target.value)} min={1} className='text-lg text-red-400 w-12 pl-2 outline-none' />
            </div>
            <div className='flex'>
              <button className='flex-grow text-gray-500' onClick={resetInput}>Cancel</button>
              <button className='flex-grow text-red-400' onClick={search}>Search</button>
            </div>
          </div>
        )}
    </header>
  )
}

export default Header
