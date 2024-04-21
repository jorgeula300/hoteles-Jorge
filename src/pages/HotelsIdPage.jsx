import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker } from "pigeon-maps"
import OtherHotels from "../components/OtherHotels/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"
import SlaiderImgs from "../components/HotelsIdPage/SlaiderImgs"


const HotelsIdPage = () => {
  const { id } = useParams()


  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotels, getHotels] = useFetch()

  useEffect(() => {
    getHotels(url)
  }, [id])

  console.log(hotels)

  return (
    <div className=" w-full max-w-[1200px] mx-auto px-4 py-20">
      <h2 className=" text-center font-bold text-3xl">{hotels?.name}</h2>
      <h3 className=" text-center font-medium text-xl">RATING-{hotels?.rating}</h3>
      <div className=" flex  md:flex-row flex-col justify-center items-center space-x-4">
        <SlaiderImgs hotels={hotels} />

        <div className="w-full max-w-[600px]">
          {
            hotels &&
            <Map height={300} defaultCenter={[+hotels?.lat, +hotels?.lon]} defaultZoom={10}>

              <Marker
                className="w-[200px]"
                width={50}
                anchor={[+hotels?.lat, +hotels?.lon]}
              />
            </Map>
          }
        </div>
      </div>
      <section className="">
        <h3 className=" text-lg font-semibold">{hotels?.city.name}, {hotels?.city.country}</h3>
        <p className=" flex items-center gap-2 mb-5 " >
          <i className='bx bx-map'></i>
          <span>{hotels?.address}</span>
        </p>
        <p>{hotels?.description}</p>

        <p>

        </p>
      </section>

      {
        localStorage.getItem('token') ? <FormReserve hotelsId={hotels?.id} />
          : <h2>if you wabt to make reservation, plase <Link to='/login'>login</Link></h2>
      }

      <OtherHotels hotels={hotels} />
    </div>
  )
}

export default HotelsIdPage