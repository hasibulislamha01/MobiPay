import { Link } from "react-router-dom";

const GuestVies = () => {
    return (
        <div className="min-h-screen flex flex-col items-center gap-24">
            <div className="text-5xl text-center pt-32">
                Welcome to Mobipay
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <Link to='/login'>
                    <button className="btn bg-green-700 w-[200px] text-white rounded-full">Login</button>
                </Link>
                <Link to="/register">
                    <button className="btn bg-red-700 w-[200px] text-white rounded-full">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default GuestVies;