import { useSelector } from "react-redux"
import HotelCard from "../components/HomePages/HotelCard"
import { useRef, useState } from "react"
import CategoryFilter from "../components/HomePages/CategoryFilter"
import PriceFilter from "../components/HomePages/PriceFilter"


const HomePage = () => {

  const [inputName, setinputName] = useState('')
  const [formTo, setFormTo] = useState(
    {
      from: 0,
      to: Infinity
    }
  )

  const hotels = useSelector(state => state.hotelsSlice)

  const inputValue = useRef()

  const handleChange = () => {
    setinputName(inputValue.current.value)
  }



  const cbfilter = hotelInfo => {
    const filterName = hotelInfo.name.toLowerCase().includes(inputName.toLowerCase().trim())
    const price = Number(hotelInfo.price)
    const filterPrice = price >= formTo.from && price <= formTo.to
    return filterName && filterPrice;
  }
  return (
    <div className="flex pt-20 ">


      <div className=" shadow-lg  flex flex-col space-y-5">
        <PriceFilter setFormTo={setFormTo} />

        <aside>
          <CategoryFilter />
        </aside>
      </div>

      <div className=" mx-auto">
        <div className="  flex justify-center items-center">
          <input className=" border-2 border-black p-2 rounded-md placeholder:text-center" type="text" ref={inputValue} onChange={handleChange} value={inputName} placeholder="Search hotel" />
        </div>

        <div className=" grid lg:grid-cols-4 mx-auto justify-items-center max-w-[890px] gap-3 my-5">
          {
            hotels?.filter(cbfilter).map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          }
        </div>

      </div>


    </div>
  )
}

export default HomePage