

const UserLogged = ({ setUser, user }) => {
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

    return (
        <article className="pt-20 flex flex-col justify-center items-center">
            <header>
                <img src={user.gender === 'female' ? '/female.png' : 'male.png'

                } alt="" />
            </header>
            <h2 className=" text-xl">{user.firstName}{user.lastName}</h2>
            <button className="bg-[#CF524F] text-white p-2 rounded-lg mt-2" onClick={handleLogout}>Logout</button>

        </article>
    )
}

export default UserLogged