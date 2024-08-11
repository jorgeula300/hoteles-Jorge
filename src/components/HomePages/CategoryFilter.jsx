import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/state/hotels.slice'


const CategoryFilter = () => {
    const url = 'https://hotelsback-production.up.railway.app/cities'

    const dispatch = useDispatch()
    const [cities, getCities] = useFetch()
    useEffect(() => {
        getCities(url)
    }, [])

    const handleFilterCity = (id) => {
        let url
        if (id) {
            url = `https://hotelsback-production.up.railway.app/hotels?cityId=${id}`
        } else {
            url = 'https://hotelsback-production.up.railway.app/hotels'
        }
        dispatch(getHotelsThunk(url))

    }
    return (
        <section className=' w-full '>
            <h3 className=' text-center text-lg font-bold'>Cities</h3>
            <ul className=' flex flex-col justify-start items-start w-full max-w-[13vh] h-full space-y-4 px-2 '>
                <li className=' cursor-pointer w-full rounded-md font-medium text-md   hover:bg-[#ef7c7a] hover:text-white transition-colors duration-300' onClick={() => handleFilterCity()}>All cities</li>
                {
                    cities?.map(city => (
                        <li className=' cursor-pointer w-full rounded-md font-medium  text-md    hover:bg-[#ef7c7a] hover:text-white transition-colors duration-300' onClick={() => handleFilterCity(city.id)} key={city.id}>{city.name}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default CategoryFilter