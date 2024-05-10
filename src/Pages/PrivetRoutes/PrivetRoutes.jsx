import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location)

  if (loading) {
    return <div className="w-full flex justify-center items-center h-20"><progress className="progress w-56"></progress></div>;
  }

  if (user?.email) {
    return children;
  }

  
  return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivetRoutes;
