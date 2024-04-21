import React, { useState } from 'react'

const SlaiderImgs = ({ hotels }) => {
    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        width: `${hotels?.images.length * 100}%`,
        transform: `translateX(calc(-${imgSelected}/${hotels?.images.length}))`

    }
    const handleLeft = () => {
        if (imgSelected > 0) {
            setImgSelected(imgSelected - 1)
        }
    }
    const handleRight = () => {
        if (imgSelected < hotels?.images.length - 1) {
            setImgSelected(imgSelected + 1)
        }
    }
    return (
        <div className="slider w-full max-w-[600px] relative   overflow-hidden">
            <div className=' w-full flex justify-between items-center absolute top-[40%]'>
                <button onClick={handleLeft} className=' text-[#CF524F]  text-5xl' ><i className='bx bxs-left-arrow-circle'></i></button>
                <button onClick={handleRight} className=' text-[#CF524F] text-5xl'><i className='bx bxs-right-arrow-circle' ></i></button>
            </div>
            <div style={objStyle} className="slider-movable flex ">
                {
                    hotels?.images.map(imgInfo => (
                        <div key={imgInfo.id} className="slider__img-container w-full p-[2em]  aspect-[1.5]">
                            <img key={imgInfo.id} className=' w-full h-full object-contain' src={imgInfo.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SlaiderImgs