
import { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../components/ReservationPage/ReserveCard'
import FormReviews from '../components/ReservationPage/FormReviews'

const ReservationPage = () => {
    const [bookings, getBokings,,,deleteBooking] = useCrud()
    const [reserveSelected, setReserveSelected] = useState()

    useEffect(() => {
        const url = 'https://hotels-api.academlo.tech/bookings'
        getBokings(url)
    }
        , []
    )
    return (
        <section>
            <FormReviews reserveSelected={reserveSelected} setReserveSelected={setReserveSelected} />
            <h2>Reservation</h2>
            {
                bookings?.map(reserve => (
                    <ReserveCard key={reserve.id} reserve={reserve} setReserveSelected={setReserveSelected} deleteBooking={deleteBooking} />
                ))
            }
        </section>
    )
}

export default ReservationPage 