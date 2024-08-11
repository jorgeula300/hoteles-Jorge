import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePages/HotelCard'
import './css/ScrollBarra.css'

function OtherHotels({ hotels }) {
    const url = `https://hotelsback-production.up.railway.app/hotels/?cityId=${hotels?.result.cityId}`
    const [hotelsInCity, getHotelsInCity] = useFetch()
    useEffect(() => {
        if (hotels) {
            getHotelsInCity(url)
        }
    }, [hotels])

    return (
        <section className=''>
            <h3 className=' text-lg font-bold'>Other hotels in <span className=' text-[#CF524F]'>{hotels?.result.city.name}</span></h3>
            <div className=' w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-4 py-3 ' >
                {
                    hotelsInCity?.filter(hotel => hotel.id !== hotels.id).map(hotel => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))
                }
            </div>
        </section>
    )
}

export default OtherHotels