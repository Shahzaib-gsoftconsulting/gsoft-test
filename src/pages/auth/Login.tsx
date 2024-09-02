import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "../../store/slices/authSlice";

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(saveUserData("user_token"));
        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Click below to login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
