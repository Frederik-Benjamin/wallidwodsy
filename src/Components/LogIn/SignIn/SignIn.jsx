import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../../Data/Authentication/AuthProvider";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")

    const {session, SignInUser} = UserAuth()
    const navigate = useNavigate()
    console.log(session);
    
    

 
    const handleSignIn = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }
        setLoading(true);
        try {
            const result = await SignInUser(email, password);

            if (result.success) {
                navigate('/Dashboard');
            }
        } catch (error) {
            setError("Error occurred: " + error.message);
        } finally {
            setLoading(false);
        }
    }




    return (
        <>
            <form id="SignUpForm" onSubmit={handleSignIn}>
                <h2>Sign in</h2>
                <p>Dont't have an account? <Link to="/LogIn">Sign up!</Link></p>

                <div>
                    <input onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" 
                    type="email" />
                    <input onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    type="password" />

                    <button type="submit" 
                    disabled={loading}>Sign up</button>
                    {error && <p>{error}</p>}
                </div>
            </form>
        </>
    )
}

export default SignIn    