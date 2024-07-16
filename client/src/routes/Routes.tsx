import Register from "@/views/Auth/Register/Register";
import Login from "@/views/Auth/Login/Login";
import Home from "@/views/Home/Home";

import { CustomRoutesObject } from "./Routes.types";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const CustomRoutes: CustomRoutesObject[] = [
    { path: "/register", Component: <Register /> },
    { path: "/login", Component: <Login /> },
    { path: "/", Component: <Home /> },
    { path: "/admin", Component: <AdminRoute></AdminRoute> },
    { path: "/private", Component: <PrivateRoute></PrivateRoute> }
]