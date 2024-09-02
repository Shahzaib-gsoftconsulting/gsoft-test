import {
    createBrowserRouter
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> }
        ],
    },
    { path: "*", element: <NotFound /> },
]);

export default router;
