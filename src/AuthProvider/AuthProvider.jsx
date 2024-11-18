import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, validatePassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../ultis/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email,pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider);
    }

    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }


    
     
    const contextValue = {
        user,
        loading,
        setUser,
        registerUser,
        loginUser,
        googleLogin,
        logout,
        resetPass
    }

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        };
    }, [])

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;