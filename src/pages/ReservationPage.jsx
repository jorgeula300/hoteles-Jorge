
import { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../components/ReservationPage/ReserveCard'
import FormReviews from '../components/ReservationPage/FormReviews'

const ReservationPage = () => {
    const [bookings, getBokings, , , deleteBooking] = useCrud()
    const [reserveSelected, setReserveSelected] = useState()

    useEffect(() => {
        const url = 'https://hotels-back-jorge.onrender.com/bookings'
        getBokings(url)
    }
        , []
    )


    console.log(reserveSelected)
    return (
        <section className=' pt-[4.5rem]'>
            {
                reserveSelected ? <FormReviews reserveSelected={reserveSelected} setReserveSelected={setReserveSelected} /> : null
            }
            <h2 className=' text-xl font-bold'>Reservation</h2>
            {
                bookings?.map(reserve => (
                    <ReserveCard key={reserve.id} reserve={reserve} setReserveSelected={setReserveSelected} deleteBooking={deleteBooking} />
                ))
            }
        </section>
    )
}

export default ReservationPage 