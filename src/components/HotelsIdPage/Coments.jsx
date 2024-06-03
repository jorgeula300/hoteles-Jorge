import React from 'react'

const Coments = ({ hotels }) => {

    return (
        <div className=' w-full flex flex-col justify-center items-center'>
            <h2 className=' text-2xl font-bold text-[#CF524F]'>Coments</h2>

            {
                hotels?.reviews.map(review => (
                    <div className=' w-full max-w-[300px] border shadow-sm rounded-xl  flex flex-col justify-center items-center my-4 p-3' key={review.id}>
                        <h3> <span>Rating:</span> {review.rating}</h3>
                        <p>{review.comment}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Coments