import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import OrderRow from "./OrderRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/orders?email=${user.email}`)
      .then((res) => setOrders(res.data));
  }, [axiosSecure, user]);


//  ! handle Delete
  const handleDelete = (id) => {
    const procced = confirm("Ar You Sure To delete This?");
    if (procced) {
      axiosSecure.delete(`/orders/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const remaining = orders.filter((data) => data._id !== id);
          setOrders(remaining);
        }
      });
    }
  };


// ! handleUpdate
  const handleOrdersUpdate = id =>{
    axiosSecure.patch(`/orders/${id}`, {status: 'confirm'})
    .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            const remainingOrders = orders.filter(dt => dt._id !== id);
            const updated = orders.find(dt => dt._id === id);
            updated.status = 'confirm'
            const updatedOrders = [updated, ...remainingOrders];

            setOrders(updatedOrders);
        }
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((data) => (
            <OrderRow
              key={data._id}
              order={data}
              handleDelete={handleDelete}
              handleOrdersUpdate={handleOrdersUpdate}
            ></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
