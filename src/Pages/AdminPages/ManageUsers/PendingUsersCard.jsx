import { Card } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'

const PendingUsersCard = ({ pendingUser }) => {

    const server = import.meta.env.VITE_SERVER_LINK
    const handleApprove = () => {
        axios.patch(`${server}/users/${pendingUser?.email}`)
            .then(res => {
                console.log(res?.data)
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "You have approved the user!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Sorry!",
                        text: "An error occured!",
                        icon: "error"
                    });
                }

            }).catch(err => {
                console.log(err.message)

            })
    }

    return (
        <Card title={pendingUser?.userName} bordered={false}>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">

                <h3>Phone: <span>{pendingUser?.phone}</span></h3>
                <h3>Role: <span className="">{pendingUser?.role?.value}</span> </h3>

                <h3>Email: <span className="">{pendingUser?.email}</span> </h3>
                <h3>Status: <span className="">pending</span> </h3>

                <div className={`${pendingUser?.status === 'approved' && 'hidden'}`}>
                    <button onClick={handleApprove} className=" btn btn-sm text-white bg-green-800">Approve</button>
                </div>
            </div>
        </Card>
    );
};

PendingUsersCard.propTypes = {
    pendingUser: PropTypes.object
}

export default PendingUsersCard;