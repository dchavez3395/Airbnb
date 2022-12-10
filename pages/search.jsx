import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import RentalCard from '../components/rentalCard'
import Map from '../components/Map';


const Search = ({searchResults}) => {
    const router = useRouter();
    const {location, startDate, endDate, numberOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd')
    const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd')
    const range = `${formattedStartDate} - ${formattedEndDate}`;
  
  return (
    <div>
        <Header placeholder={`${location} | ${range} ${numberOfGuests} guests`} />
        <main className='flex'>
            <section className='px-6 pt-14 flex-grow'>
                <p className='text-xs'>300+ Stays - {range} - for {numberOfGuests} guests</p>
                <h1 className='font-semibold mb-6 mt-2 text-3xl'>Stays in {location}</h1>
                <div className='mb-5 hidden lg:inline-flex whitespace-nowrap space-x-3 text-gray-800'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More filters</p>

                </div>  
                {searchResults.map(({img, location, title, description, star, price, total}) => (
                    <RentalCard key={img} img={img} location={location} title={title} description={description} star={star} price={price} total={total} />
                ))}
            </section>
            <section className='xl:min-w-[600px] hidden xl:inline-flex'>
                <Map />
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search


export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/HHER").then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}