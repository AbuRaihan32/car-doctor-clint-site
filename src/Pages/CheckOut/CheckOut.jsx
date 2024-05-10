import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { _id, price, title, img } = service;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user.email;
    const date = form.date.value;
    const order = {
      customerName: name,
      email,
      date,
      serviceId: _id,
      serviceTitle: title,
      price,
      img
    }


    axiosSecure.post('/orders', order)
    .then(res => {
        if(res.data.insertedId){
            alert('Order confirmed')
        }
    })

  };

  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl my-11">
      <div className="card w-2/3 shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit}
          className="card-body grid grid-cols-2 gap-3"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder=""
              name="date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              className="border rounded-xl outline-none p-5"
              name="message"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="mt-6 col-span-2">
            <input
              className="btn w-full bg-orange-600 text-white hover:text-black"
              type="submit"
              value="Confirm Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
