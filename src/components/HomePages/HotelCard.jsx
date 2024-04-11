import { useNavigate } from "react-router-dom"


const HotelCard = ({ hotel }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }
    return (
        <article className=" rounded-xl w-full max-w-[15em] border shadow">
            <header className=" rounded-t-xl overflow-hidden ">
                <img className="min-h-[11em]" src={hotel.images[0].url} alt={hotel.name} />
            </header>
            <section className="flex flex-col justify-center mt-4 mx-3 mb-3 space-y-2">
                <div className=" h-[50px]">
                    <h3 className=" text-sm font-bold">{hotel.name}</h3>
                </div>

                <div className=" h-[60px] flex flex-col justify-center "> 
                    <p>{hotel.rating}</p>
                    <span className=" text-xs font-medium ">{hotel.city.name}, {hotel.city.country}</span>
                    <span className=" text-xs font-semibold">$ {hotel.price}</span>

                </div>

                <footer className="w-full h-[30px]  flex justify-center items-center ">
                    <button className=" rounded-lg shadow  px-2 bg-[#CF524F] text-white font-semibold" onClick={handleClick}>See more...</button>
                </footer>
            </section >
        </article>
    )
}

export default HotelCard