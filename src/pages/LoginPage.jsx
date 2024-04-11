import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useState } from "react"
import UserLogged from "../components/LoginPage/UserLogged"

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const { loginUser } = useAuth()

  const submit = (data) => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  if (localStorage.getItem('user')) {
    return <UserLogged setUser={setUser} user={user} />
  }


  return (
    <div className=" w-full h-[100vh] flex justify-center items-center" >
      <form className=" border py-5 space-y-4 rounded-xl [&>h2]:text-center [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-[#CF524F] [&>hr]:w-full  [&>div]:space-y-4  [&>div>label]:text-lg [&>div>label]:flex [&>div>label]:flex-col [&>div>label]:justify-center [&>div]:px-4  [&>div>label>input]:border w-full max-w-[23rem] [&>div>label>select]:border [&>div>button]:border [&>div>button]:w-full [&>div>button]:py-1 [&>div>button]:bg-[#CF524F] [&>div>button]:text-white [&>div>button]:font-bold [&>div>button]:mr-4   " onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <hr />
        <div>
          <label>
            <span>Email</span>
            <input type="email" {...register('email')} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" {...register('password')} />
          </label>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage