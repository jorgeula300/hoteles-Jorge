import React from 'react'

const ReserveCard = ({ reserve, setReserveSelected }) => {
    const checkIn = new Date(reserve.checkIn);
    const checkOut = new Date(reserve.checkOut);
    const days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    const price = days * reserve.hotel.price;
    const handleReview = () => {
        const obj = {
            ...reserve,
            days,
            price,
            
        }
        setReserveSelected(obj);
    }

    const handleDeleteBooking = () =>  {
        const url = `https://hotels-api.academlo.tech/reviews/${reserve.id}`
        
        deleteBooking(url,reserve.id)

    }
    return (
        <article className=' flex justify-between items-center shadow-md border rounded-xl w-full max-w-[70vw] mx-auto'>

            <header className='w-full  max-w-[10rem] overflow-hidden rounded-l-xl'>

                <img src= {reserve.hotel.images[0].url} alt="" />

            </header>

            <section className=' w-auto space-y-2 '>

                <h3 className=' font-bold'>{reserve.hotel.name}</h3>

                <div className=' font-medium'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>

                <div onClick={ handleReview} className=' text-blue-600'>Rate and comment this visit...</div>

            </section>

            <section>

                <ul className=' flex flex-col justify-center items-center [&>li]:flex [&>li]:space-x-4'>

                    <li><span>Reservation Days</span><span>{days}</span></li>

                    <li><span>subtotal Price</span><span>{price} USD</span></li>

                </ul>

            </section>

            <footer>

                <button onClick={handleDeleteBooking}>

                    <i className='bx bx-trash'></i>

                </button>

            </footer>

        </article>
    )
}

export default ReserveCard