import { useForm } from "react-hook-form";
import useAuth from "../../CustomHooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { loginUser } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [firebaseErr, setFirebaseErr] = useState(null)

    const handleLogin = (data) => {

        setFirebaseErr(null)
        console.log(data)
        const userEmail = data.email
        const pin = data.pin
        const password = pin.concat('@firebase')
        console.log(userEmail, password, typeof password)

        loginUser(userEmail, password)
        .then(res => {
            if(res?.user){
                Swal.fire({
                    title: "Success!",
                    text: "You have logged in!",
                    icon: "success"
                });
                navigate('/')
            }
        }) .catch(err => {
            console.error(err.message)
            setFirebaseErr(err.message)
        })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-12">
            <h1 className="text-3xl">Login</h1>

            {
                firebaseErr && <p className="text-red-500 text-center font-medium">{firebaseErr}</p>
            }

            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col space-y-6">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Your Email</span>
                    </div>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && <p className="text-red-400">email is required.</p>}
                    
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pin</span>
                    </div>
                    <input
                        {...register('pin', { required: true })}
                        type="number"
                        placeholder="Enter Your 5 digit pin"
                        className="input input-bordered w-full max-w-xs" 
                        />
                        {errors.pin && <p className="text-red-400">Pin is required.</p>}
                    
                </label>

                <div className="flex justify-center">
                    <button type="submit" className=" btn w-[200px] rounded-full bg-green-800 text-white">Login</button>
                </div>
            </form>

        </div>
    );
};

export default Login;