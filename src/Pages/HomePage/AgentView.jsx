import useAuth from "../../CustomHooks/useAuth";

const AgentView = () => {
    const {user} = useAuth()
    const userName = user?.displayName
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="pt-32 text-3xl text-center">Welcome Agent</h1>
            <div>
                {userName}
            </div>
        </div>
    );
};

export default AgentView;