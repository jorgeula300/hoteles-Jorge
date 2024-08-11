
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReserve = ({ hotelsId }) => {
    const { register, handleSubmit, reset } = useForm()
    const [, , createBooking] = useCrud()
    const submit = data => {
        const url = 'https://hotelsback-production.up.railway.app/bookings'
        data.hotelId = Number(hotelsId)
        createBooking(url, data)
        reset({
            checkIn: '',
            checkOut: '',
            hotelId: ''
        })
    }
    return (
        <section className=" w-full max-w-[400px] mx-auto shadow-md border rounded-xl p-2 mt-4">
            <h2 className=" text-xl font-bold text-[#CF524F]">Reservation</h2>
            <form onSubmit={handleSubmit(submit)} className=" w-full flex flex-col justify-center items-center gap-3 [&>button]:rounded-lg [&>button]:border [&>button]:px-2 [&>button]:py-1 [&>button]:bg-[#CF524F] [&>button]:text-white [&>button]:font-semibold ">
                <div className="flex justify-center items-center w-full gap-1 md:gap-3 [&>label]:flex [&>label]:flex-col [&>label]:space-y-2 [&>label>span]:font-bold [&>label>input]:border [&>label>input]:border-black [&>label>input]:w-full [&>label>input]:max-w-[200px] ">
                    <label htmlFor="" className=" pl-3">
                        <span>Check-in</span>
                        <input type="date" {...register('checkIn')} />
                    </label>
                    <label htmlFor="" className=" pr-3">
                        <span>Check-out</span>
                        <input type="date" {...register('checkOut')} />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </section>
    );
};

export default FormReserve;
