import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePages/HotelCard'
import './css/ScrollBarra.css'

function OtherHotels({ hotels }) {
    const url = `https://hotels-api.academlo.tech/hotels/?cityId=${hotels?.cityId}`
    const [hotelsInCity, getHotelsInCity] = useFetch()
    useEffect(() => {
        if (hotels) {
            getHotelsInCity(url)
        }
    }, [hotels])

    return (
        <section>
            <h3 className=' text-lg font-bold'>Other hotels in <span className=' text-[#CF524F]'>{hotels?.city.name}</span></h3>
            <div className=' w-full max-w-[1200px] mx-auto  flex justify-center items-center gap-4 overflow-x-auto overflow-y-hidden py-3 ' id='scrollBarra'>
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