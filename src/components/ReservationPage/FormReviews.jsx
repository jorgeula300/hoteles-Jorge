import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'

const FormReviews = ({ reserveSelected, setReserveSelected }) => {
    const { handleSubmit, reset, register } = useForm()
    const [, , createReview] = useCrud()

    const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'
        data.hotelId = reserveSelected?.hotel.id
        data.rating = Number(data.rating)
        createReview(url, data)
        setReserveSelected()
        reset({
            rating: '',
            comment: ''
        })
    }

    const handleClose = () => {
        setReserveSelected()
    }
    return (
        <article className=' fixed top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex justify-center items-center z-40  '>

            <div className=' w-full max-w-[308px] overflow-hidden bg-white  pb-3 flex flex-col justify-center items-center rounded-xl'>
                <section className=' space-y-3'>
                    <header className='w-full relative'>
                        <img src={reserveSelected?.hotel.images[0].url} alt="ImgH" />
                        <div onClick={handleClose} className=' bg-white w-[20px] h-[20px] rounded-full absolute top-2 right-2 flex justify-center items-center'>
                            <i className='bx bxs-x-circle text-[#CF524F] text-[20px]'></i>
                        </div>
                    </header>
                    <h4 className=' text-center text-md font-bold '>{reserveSelected?.hotel.name}</h4>
                    <div className=' px-3'>
                        <p className=' font-medium'>
                            {reserveSelected?.hotel.city.name},{" "}
                            {reserveSelected?.hotel.city.country}
                        </p>
                        <ul>
                            <li className=' flex justify-between items-center [&>span]:font-medium'>
                                <span>Reservation Days</span>
                                <span>{reserveSelected?.days}</span>
                            </li>
                            <li className=' flex justify-between items-center [&>span]:font-medium'>
                                <span>subtotal Price</span>
                                <span>{reserveSelected?.price} USD</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <form className=' flex flex-col justify-center items-center space-y-3 [&>label>select]:border [&>label>textarea]:border' onSubmit={handleSubmit(submit)}>
                    <label className=' flex flex-col justify-center items-center' >
                        <span className=' font-medium'>Rating</span>
                        <select className=' w-[140px] h-[5vh] rounded-md' {...register('rating')}>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="1">⭐</option>
                        </select>
                    </label>
                    <label className=' flex flex-col justify-center items-center'>
                        <span className=' font-medium'>Comments</span>
                        <textarea className=' w-[150px] h-[10vh] rounded-md' {...register('comment')} />
                    </label>
                    <button className=' px-2 py-1 bg-[#CF524F] text-white rounded-lg'>Submit</button>
                </form>
            </div>

        </article>
    )
}

export default FormReviews