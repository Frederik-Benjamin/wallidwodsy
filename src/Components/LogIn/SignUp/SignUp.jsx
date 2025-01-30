import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../../Data/Authentication/AuthProvider";

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")

    const {session, SignUpNewUser} = UserAuth()
    const navigate = useNavigate()
    console.log(session);
    
    

 
    const handleSignUp = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await SignUpNewUser(email, password)

            if(result.succes) {
                navigate('/Dashboard')
            }
        } catch (error) {
            setError("error occured:")
        } finally {
            setLoading(false);
        }
    }




    return (
        <>
            <form id="SignUpForm" onSubmit={handleSignUp}>
                <h2>Sign Up today!</h2>
                <p>Already have an account? <Link to="/SignIn">Sign in!</Link></p>

                <div>
                    <input onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" 
                    type="email" />
                    <input onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    type="password" />

                    <button type="submit" disabled={loading}>Sign up</button>
                    {error && <p>{error}</p>}
                </div>
            </form>
        </>
    )
}

export default SignUp    