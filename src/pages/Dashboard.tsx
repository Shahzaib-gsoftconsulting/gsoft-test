import React from "react";
import Logout from "./auth/Logout";
const Dashboard: React.FC = () => {
    return (
        <>
            <h2>Dashboard (Private)</h2>
            <Logout />
        </>
    )
};

export default Dashboard;
