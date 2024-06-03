import axios from "axios"
import { useNavigate } from "react-router-dom"


const useAuth = () => {
    const navigate = useNavigate()

    const registerUser = (data) => {
        const url = "https://hotels-back-jorge.onrender.com/users"
        

        axios.post(url, data).then(res => {
            navigate("/login")


        }).catch(err => {
            console.log(err)
        })
    }

    const loginUser = (data) => {
        const url = "https://hotels-back-jorge.onrender.com/users/login"
        axios.post(url, data).then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            navigate("/")
        }).catch(err => {
            console.log(err)
        })
    }
    return { registerUser, loginUser }

}

export default useAuth