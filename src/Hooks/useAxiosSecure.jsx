import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../Firebase/Firebase.init";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error.response);
        if (error.response.status === 401 || error.response.status === 401) {
            signOut(auth)
            .then(()=>{
                <Navigate to={'/login'}></Navigate>
            })
            .catch((err)=>{
                console.log(err)
            })
        }
      }
    );
  }, []);

  return axiosSecure;
};
export default useAxiosSecure;
