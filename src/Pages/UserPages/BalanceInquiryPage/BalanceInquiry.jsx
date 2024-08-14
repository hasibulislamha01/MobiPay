import useAuth from "../../../CustomHooks/useAuth";
import useUserInfo from "../../../CustomHooks/useUserInfo";

const BalanceInquiry = () => {

    const { user } = useAuth()
    const email = user?.email
    
    const balanceInfo = useUserInfo('balance', email)
    console.log(balanceInfo);

    return (
        <div className="min-h-screen pt-12">

            <h1 className="my-12 text-center text-3xl">Balance Inquiry</h1>

            <div className="bg-green-100 rounded-lg lg:py-32 flex items-center justify-center">
                <h1 className=" text-5xl text-green-800">{balanceInfo?.balance}</h1>
            </div>

        </div>
    );
};

export default BalanceInquiry;