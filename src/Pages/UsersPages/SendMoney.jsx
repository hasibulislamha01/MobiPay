import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SendMoney = () => {

    const {register, handleSubmit, formState: { errors } } = useForm()
    const [amount, setAmount] = useState(0)
    const [charge, setCharge] = useState(0)
    const [sendMoneyErr, setSendMoneyErr] = useState(null)
    const [total, setTotal] = useState(0)


    const fixCharge = (e) => {
        const sendMoneyAmount = parseInt (e.target.value)
        console.log(typeof sendMoneyAmount, sendMoneyAmount)
        setAmount(sendMoneyAmount)
        if(sendMoneyAmount<50){
            setCharge(0)
            setSendMoneyErr('Amount must be at least 50 taka or above')
        } else if(sendMoneyAmount >= 50 && sendMoneyAmount <= 100) {
            setCharge(0)
            setSendMoneyErr(null)
        } else if ( sendMoneyAmount > 100) {
            setCharge(5)
            setSendMoneyErr(null)
        }
        // console.log('charge is',charge, 'error', sendMoneyErr)
    }

    useEffect(()=>{
        console.log('charge is',charge, 'error', sendMoneyErr)
        setTotal(amount + charge)
    }, [charge, sendMoneyErr, amount])


    const handleSendMoney = () => {
        console.log('sending money')
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center">Send Money</h1>
            <form onSubmit={handleSubmit(handleSendMoney)}>
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
                        onChange={fixCharge}
                    />
                    {sendMoneyErr && <p className="text-red-400 font-semibold max-w-xs">{sendMoneyErr}</p>}
                </label>

                <label htmlFor="">
                    <div className="label mt-6 text-xl">
                        <span className="mr-2">Sendable Amount with charge is</span> 
                        <span className="text-red-500 ">{total}</span>
                    </div>
                   
                </label>

                <button type="submit" className="btn btn-block mt-6 bg-green-800 text-white"> Send Money </button>

            </form>
        </div>
    );
};

export default SendMoney;