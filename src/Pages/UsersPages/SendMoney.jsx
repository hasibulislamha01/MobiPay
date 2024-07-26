import { useState } from "react";
import { useForm } from "react-hook-form";

const SendMoney = () => {

    const {register, handleSubmit, formState: { errors } } = useForm()
    const [charge, setCharge] = useState(0)

    const fixCharge = (e) => {
        console.log(e.target.amount.value)
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center">Send Money</h1>
            <form>
                <label htmlFor="">
                    <div className="label">
                        Send to
                    </div>
                    <input
                        {...register('mobileNo', {required: true})}
                        type="text"
                        placeholder="Mobile Number"
                        className="input input-bordered w-full max-w-xs" 
                    />
                    {errors.mobileNo && <p></p>}
                </label>
                
                <label htmlFor="">
                    <div className="label">
                        Enter Amount
                    </div>
                    <input
                        {...register('amount', {required: true})}
                        type="number"
                        placeholder="Amount to be sent"
                        className="input input-bordered w-full max-w-xs" 
                        onChange={(e) => fixCharge() }
                    />
                </label>

                <label htmlFor="">
                    <div className="label">
                        Sendable Amount with charge
                    </div>
                    <input
                        // {...register('mobileNo', {required: true})}
                        disabled
                        type="number"
                        placeholder="Amount to be sent"
                        className="input input-bordered w-full max-w-xs" 
                        // value={}
                    />
                </label>

            </form>
        </div>
    );
};

export default SendMoney;