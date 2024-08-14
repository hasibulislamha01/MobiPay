import { useForm } from "react-hook-form";

const CashOut = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const handelCashOutRequest = () => {
        console.log('cash out request sent to the agent')
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl">Cash Out</h1>

            <form onSubmit={handleSubmit(handelCashOutRequest)} className="mt-12">

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter Agent Number</span>
                    </div>
                    <input
                        {...register('agentNo', { required: true })}
                        type="number"
                        placeholder="Type Agent no. here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.agentNo && <p className="text-red-400">Please Enter a valid Agent No.</p>}
                </label>


                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter Amount</span>
                    </div>
                    <input
                        {...register('amount', { required: true })}
                        type="number"
                        placeholder="Type amount here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.amount && <p className="text-red-400">Please Enter a valid amount</p>}
                </label>

                <button type="submit" className="mt-6 btn btn-block bg-sky-500 text-white">Proceed</button>

            </form>

        </div>
    );
};

export default CashOut;