import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../features/home/pages/Home";
import UserDashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import Dashboard from "../features/dashboard/pages/Dashboard";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
    ],
  },


  {
    path:"/dashboard",
    element:<UserDashboardLayout/>,
    children:[
      {
        index:true,
        element:<Dashboard/>,
      }
    ]
  }
]);
export default router;