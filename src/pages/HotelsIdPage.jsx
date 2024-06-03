import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker } from "pigeon-maps"
import OtherHotels from "../components/OtherHotels/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"
import SlaiderImgs from "../components/HotelsIdPage/SlaiderImgs"
import Coments from "../components/HotelsIdPage/Coments"


const HotelsIdPage = () => {
  const { id } = useParams()


  const url = `https://hotels-back-jorge.onrender.com/hotels/${id}`
  const [hotels, getHotels] = useFetch()

  useEffect(() => {
    getHotels(url)
  }, [id])


  return (
    <div className=" w-full max-w-[1200px] mx-auto px-4 py-20">
      <h2 className=" text-center font-bold text-3xl">{hotels?.result.name}</h2>
      <h3 className=" text-center font-medium text-xl">RATING-{hotels?.result.rating}</h3>
      <div className=" flex  md:flex-row flex-col justify-center items-center space-x-4">
        <SlaiderImgs hotels={hotels} />

        <div className="w-full max-w-[600px]">
          {
            hotels &&
            <Map height={300} defaultCenter={[hotels?.result.lat, hotels?.result.lng]} defaultZoom={10}>

              <Marker
                className="w-[200px]"
                width={50}
                anchor={[hotels?.result.lat, hotels?.result.lng]}
              />
            </Map>
          }
        </div>
      </div>
      <section className="">
        <h3 className=" text-lg font-semibold">{hotels?.result.city.name}, {hotels?.result.city.country}</h3>
        <p className=" flex items-center gap-2 mb-5 " >
          <i className='bx bx-map'></i>
          <span>{hotels?.result.address}</span>
        </p>
        <p>{hotels?.result.description}</p>

        <p>

        </p>
      </section>

      {
        localStorage.getItem('token') ? <FormReserve hotelsId={hotels?.result.id} />
          : <h2>if you wabt to make reservation, plase <Link to='/login'>login</Link></h2>
      }

      <OtherHotels hotels={hotels} />

      <Coments hotels={hotels} />


    </div>
  )
}

export default HotelsIdPage