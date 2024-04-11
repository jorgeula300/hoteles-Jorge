import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import HotelsIdPage from "./pages/HotelsIdPage"
import RegistrerPage from "./pages/RegistrerPage"
import LoginPage from "./pages/LoginPage"
import { getHotelsThunk } from "./store/state/hotels.slice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import PrincipalHeader from "./components/shared/PrincipalHeader"
import ReservationPage from "./pages/ReservationPage"
import ProtecterRouter from "./pages/ProtecterRouter"


function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }
    , []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  )

  return (
    <div>
    <PrincipalHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelsIdPage />} />
        <Route path="/registrer" element={<RegistrerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element = {<ProtecterRouter/>} >
        <Route path="/reservations" element={<ReservationPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
