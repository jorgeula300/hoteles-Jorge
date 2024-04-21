import React from "react";
import { useForm } from "react-hook-form";


const PriceFilter = ({ setFormTo }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const submit = data => {
        const from = data.from
        const to = data.to
        setFormTo({
            from: from === "" ? 0 : Number(from),
            to: to === "" ? Infinity : Number(to),
        })
        reset({
            from: "",
            to: "",
        })
    }

    return (
        <section className=" w-full max-w-[200px]">
            <h2 className=" font-bold text-lg">Filters</h2>
            <h3 className=" text-center font-medium">Price</h3>
            <form className=" overflow-hidden flex flex-col space-y-4 px-2 [&>label]:flex [&>label]:flex-col [&>label]:gap-2  [&>label>input]:border-2 [&>label>input]:border-black [&>label>input]:p-2 [&>label>input]:rounded-md [&>button]:border-2 [&>button]:border-[#CF524F] [&>button]:p-2 [&>button]:bg-[#CF524F] [&>button]:shadow-md [&>button]:text-white [&>button]:font-bold [&>button]:cursor-pointer " onSubmit={handleSubmit(submit)}>
                <label htmlFor="">
                    <span>From</span>
                    <input type="number" {...register("from")} />
                </label>
                <label htmlFor="">
                    <span>To</span>
                    <input type="number" {...register("to")} />
                </label>
                <button>Apply</button>
            </form>
        </section>
    );
};

export default PriceFilter;
