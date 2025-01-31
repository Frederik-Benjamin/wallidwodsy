import React from "react";
import  { UserAuth } from "../../../../Data/Authentication/AuthProvider"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const  { session, SignOut } = UserAuth();
    const nagivate = useNavigate();

    console.log(session);
    
    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            await SignOut();
            nagivate("/");
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <h2>Welcome, {session?.user?.email}</h2>
        <div>
            <p onClick={handleSignOut}
            >Sign Out</p>
        </div>
        </>
    )
}

export default Dashboard