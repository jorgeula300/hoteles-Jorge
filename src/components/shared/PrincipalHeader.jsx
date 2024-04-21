import { useState } from "react";
import { Link } from "react-router-dom";

const PrincipalHeader = () => {
    const [visible, setVisible] = useState(false)
    const handleVisible = () => {
        setVisible(!visible)
    }
    return (
        <header className="flex justify-between items-center px-3 fixed w-full h-[10vh] z-20  bg-white shadow-lg">
            <h1 className=" text-3xl font-bold"><Link to='/'>Hotels<span className="text-[#CF524F] ">-App</span></Link></h1>
            <nav className={`w-full md:max-w-[20rem] fixed top-0 left-0 min-h-[100vh] bg-[#0003] md:backdrop-blur-none md:min-h-0 md:bg-transparent backdrop-blur-[2px] md:flex md:relative justify-center items-center ${visible ? "flex" : "hidden"}  `}>
                <ul className=" w-full md:max-w-auto max-w-[20rem] md:p-0 p-3 md:rounded-none rounded-xl flex md:flex-row flex-col justify-center items-center md:space-x-3 md:space-y-0 space-y-4 bg-white [&>li>a]:text-white [&>li]:text-lg [&>li]:bg-[#CF524F] [&>li]:px-2 [&>li]:rounded-lg relative  ">
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li>
                        <Link to='/registrer'>Register</Link>
                    </li>
                    <li><Link to='/login'>Login</Link></li>
                    <div onClick={handleVisible} className=" absolute -top-3 right-2 bg-white w-[20px] h-[20px] rounded-full md:hidden">
                        <i className='bx bxs-x-circle text-[#CF524F] text-[20px]'></i>
                    </div>

                </ul>

            </nav>
            <i onClick={handleVisible} className='bx bx-menu text-3xl font-semibold md:hidden'></i>
        </header>
    )
}

export default PrincipalHeader