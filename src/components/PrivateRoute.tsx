import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectSessionInfo } from "../store/slices/authSlice";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useSelector(selectSessionInfo);

    return user ? <>{children}</> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
