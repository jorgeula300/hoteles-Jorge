import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"


const RegistrerPage = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const {registerUser} = useAuth()
  const submit = data => {
    registerUser(data)
    reset(
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "unknown"
      }
    )
  } 
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit(submit)} className=" border py-5 space-y-4 rounded-xl [&>h2]:text-center [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-[#CF524F] [&>hr]:w-full  [&>div]:space-y-4  [&>div>label]:text-lg [&>div>label]:flex [&>div>label]:flex-col [&>div>label]:justify-center [&>div]:px-4  [&>div>label>input]:border w-full max-w-[23rem] [&>div>label>select]:border [&>div>button]:border [&>div>button]:w-full [&>div>button]:py-1 [&>div>button]:bg-[#CF524F] [&>div>button]:text-white [&>div>button]:font-bold [&>div>button]:mr-4   ">
        <h2>Register</h2>

        <hr />
       <div>
       <label>
          <span>First Name</span>
          <input type="text" {...register("firstName")} />
        </label>
        <label>
          <span>Last Name</span>
          <input type="text" {...register("lastName")}  />
        </label>
        <label>
          <span>Email</span>
          <input type="email" {...register("email")}   />
        </label>
        <label>
          <span>Password</span>
          <input type="password" {...register("password")} />
        </label>
        <label>
          <span>Gender</span>
          <select {...register("gender")}>
            <option value="unknown">Unknown</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Unknown</option>
          </select>
        </label>
        <button>Submit</button>
       </div>
      </form>
    </div>
  )
}

export default RegistrerPage