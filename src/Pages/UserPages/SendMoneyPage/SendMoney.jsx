import { useForm } from "react-hook-form";

const SendMoney = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSendMoney = () => {
        console.log('sending money');
    }
    return (
        <div className="min-h-screen pt-12 lg:pt-24">
            <h1 className="text-center text-3xl">Send Money</h1>

            <form onSubmit={handleSubmit(handleSendMoney)} className="lg:w-1/4 mx-auto mt-12 space-y-5">

                <div className="form-control space-y-2">
                    <label htmlFor="receiverNo">Enter Receiver Mobile Number</label>
                    <input
                        {...register('receiverNo', { required: true, maxLength:11, minLength:11 })}
                        type="number"
                        placeholder="Enter number here"
                        className="input border input-bordered outline-none"
                        inputMode="email"
                    />

                    {errors.receiverNo && errors.receiverNo.type === 'required' && <p className="text-red-400">Please enter a receiver number</p>}
                    {errors.receiverNo && errors.receiverNo.type === "maxLength" || "minLength" && <p className="text-red-400">Phone no must be of 11 digits</p>}

                </div>

                <div className="form-control space-y-2">
                    <label htmlFor="receiverNo">Enter Amount</label>
                    <input
                        {...register('amount', { required: true })}
                        type="number"
                        placeholder="type amount..."
                        className="input border input-bordered outline-none"
                        inputMode="email"
                    />
                    {errors.amount && <p className="text-red-400">Please enter a valid amount</p>}
                </div>

                <div className="form-control space-y-2">
                    <label htmlFor="receiverNo">Enter Your Pin </label>
                    <input
                        {...register('pin', { required: true })}
                        type="number"
                        placeholder="type pin no..."
                        className="input border input-bordered outline-none"
                        inputMode="email"
                    />
                    {errors.pin && <p className="text-red-400">Please enter pin</p>}
                </div>

                <button type="submit" className="btn btn-block text-red-600 bg-white border border-red-600 hover:bg-red-500 hover:text-white">Confirm</button>
            </form>
            
        </div>
    );
};

export default SendMoney;