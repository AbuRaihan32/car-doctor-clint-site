import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import UserOrders from "../Pages/UserOrders/UserOrders";
import PrivetRoutes from "../Pages/PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/checkout/:id',
          element: <PrivetRoutes><CheckOut></CheckOut></PrivetRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: 'userOrders',
          element: <PrivetRoutes><UserOrders></UserOrders></PrivetRoutes>
        }
    ]
  },
]);

export default router;
