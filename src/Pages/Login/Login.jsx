import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../public/assets/images/login/login.svg";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {signInUser} = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in User
    signInUser(email, password)
      .then(() => {
        alert("sign complete");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img className="mx-auto" src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email.."
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 hover:text-black text-white font-bold">
                Login
              </button>
            </div>
            <p className="text-center my-3">
              New To Car Doctor? Please{" "}
              <Link className="text-orange-600" to={"/register"}>
                {" "}
                Register{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
