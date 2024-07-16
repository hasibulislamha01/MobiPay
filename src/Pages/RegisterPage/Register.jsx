import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from 'react-select'


const Register = () => {

    const serverBaseURL = import.meta.env.VITE_SERVER_LINK
    const { register, handleSubmit, formState: { errors }, control } = useForm()

    const handleSubmittedData = (data) => {
        console.log(data)
        axios.post(`${serverBaseURL}/users/pending`, data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your membership request is in process!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Failed!",
                        text: "Try again!",
                        icon: "error"
                    });
                }
            }).catch(error => {
                console.error(error.message)
            })
    }

    const options = [
        { value: 'User', label: 'User' },
        { value: 'Agent', label: 'Agent' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            <h1 className="text-3xl">Register</h1>

            <form onSubmit={handleSubmit(handleSubmittedData)} className="space-y-10">

                <div className="flex flex-col justify-center md:flex-row gap-6">
                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter your name?</span>
                        </div>
                        <input
                            {...register('userName', { required: true })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.userName && <p className="text-red-400">Your name is required.</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter your email</span>
                        </div>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className="text-red-400">Email is required.</p>}
                    </div>
                </div>



                <div className="flex flex-col justify-center md:flex-row gap-6">
                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Your Phone No.</span>
                        </div>
                        <input
                            {...register('phone', { required: true, maxLength: 11, minLength: 11 })}
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.phone && errors.phone.type === "required" && <p className="text-red-400">Your phone no. is required.</p>}
                        {errors.phone && errors.phone.type === "maxLength" || "minLength" && <p className="text-red-400">Phone no must be of 11 digits</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter a 5 digit Pin</span>
                        </div>
                        <input
                            {...register('pin', {
                                required: 'Secure Pin is required',
                                validate: value => value.length === 5 || 'PIN must be 5 digits long.'
                            })}
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.pin && errors.pin.type === "maxLength" || "minLength" && <p className="text-red-400">Pin no must be of 5 digits</p>}

                    </div>



                </div>

                <Controller
                    name="role"
                    control={control}
                    rules={{ required: 'Role is required' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={options}
                            placeholder='Register as'
                        />
                    )}
                />

                {errors.role && <p className="text-red-400">Role is required</p>}


                <div className="flex justify-center mt-12">
                    <button type="submit" className="btn bg-green-800 text-white rounded-full w-[200px]">Register</button>
                </div>
            </form>



        </div>
    );
};

export default Register;