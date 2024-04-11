import { Outlet , Navigate } from "react-router-dom";

const ProtecterRouter = () => {
  
  if (localStorage.getItem('token')) {
    return <Outlet />
  
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtecterRouter