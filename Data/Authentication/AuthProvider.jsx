import { createContext, useContext, useEffect, useState} from "react";
import supabase from "../../src/Utils/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [session, setSession] = useState(undefined)


    // Sign Up
    const SignUpNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.log("there was a problem signing up", error);
            return { succes: false, error};
        }
        return { succes: true, data };


    };


    // Sign In 
    const SignInUser = async ( email, password ) => {
        console.log("Email:", email, "Password:", password);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email, 
                password: password,
            });
            if (error) {
                console.error("sign in error occured: ", error);
                return { succes: false, error: error.message };   
            }
            console.log("sign-in succes: ", data);
            return { succes: true, data };
            }
            catch (error) {
                console.error("an error occured: ", error);
                
            }
    }

    
    // Sign Out
    const SignOut = () => {
        const { error } = supabase.auth.signOut();
        if (error) {
            console.log("there was an error:", error);
        };
    };




    useEffect(() => {
        supabase.auth.getSession().then(({data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        });

    }, []);


    


    return (
        <AuthContext.Provider value={{ session, SignUpNewUser, SignInUser, SignOut }}>
            {children}
        </AuthContext.Provider>
    );
};


export const UserAuth = () => {
    return useContext(AuthContext);
}