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

    const handleDeleteBooking = () => {
        const url = `https://hotels-api.academlo.tech/reviews/${reserve.id}`

        deleteBooking(url, reserve.id)

    }
    return (
        <article className=' flex justify-between items-center shadow-md border rounded-xl w-full max-w-[70vw] mx-auto'>

            <header className='w-full  max-w-[10rem] overflow-hidden rounded-l-xl'>

                <img src={reserve.hotel.images[0].url} alt="" />

            </header>

            <section className=' w-auto space-y-2 '>

                <h3 className=' font-bold'>{reserve.hotel.name}</h3>

                <div className=' font-medium'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>

                <div onClick={handleReview} className=' text-blue-600 cursor-pointer'>Rate and comment this visit...</div>

            </section>

            <section>

                <ul className=' flex flex-col justify-start items-start w-[15vw] [&>li]:w-full [&>li]:flex  [&>li]:justify-between [&>li]:items-center [&>li]:space-x-4'>

                    <li><span>Reservation Days</span><span className=' w-[5vw] text-center'>{days}</span></li>

                    <li><span>subtotal Price</span><span>{price} USD</span></li>

                </ul>

            </section>

            <footer>

                <button className=' w-[2em] h-[2em] rounded-xl flex justify-center items-center text-white text-xl bg-[#CF524F] mr-2' onClick={handleDeleteBooking}>

                    <i className='bx bx-trash'></i>

                </button>

            </footer>

        </article>
    )
}

export default ReserveCard