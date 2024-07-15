
const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">What is your name?</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
            </label>
        </div>
    );
};

export default Login;