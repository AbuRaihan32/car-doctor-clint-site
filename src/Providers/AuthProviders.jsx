import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  console.log(user);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign Out
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   observe user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loggedUser = { email: currentUser?.email || user?.email };
      setUser(currentUser);
      if (currentUser) {
        // axios
        //   .post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //   });
        axiosSecure.post("/jwt", loggedUser)
        .then((res) => {
          console.log(res.data);
        });
      } else {
        // axios
        //   .post("http://localhost:5000/logout", loggedUser, {
        //     withCredentials: true,
        //   })
        //   .then((res) => console.log(res.data));
        axiosSecure.post("/logout", loggedUser)
        .then((res) => {
          console.log(res.data);
        });
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axiosSecure, user]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    LogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
