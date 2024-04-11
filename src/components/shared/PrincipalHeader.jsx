import { Link } from "react-router-dom";

const PrincipalHeader = () => {
    return (
        <header className="flex justify-between items-center px-3 fixed w-full h-[10vh] z-20  bg-white shadow-lg">
            <h1 className=" text-2xl text-[#CF524F] font-bold"><Link to='/'>Hotels-App</Link></h1>
            <nav className="w-full max-w-[20rem]">
                <ul className=" w-full flex justify-center items-center space-x-3  [&>li>a]:text-white [&>li]:text-lg [&>li]:bg-[#CF524F] [&>li]:px-2 [&>li]:rounded-lg  ">
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li>
                        <Link to='/registrer'>Register</Link>
                    </li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default PrincipalHeader