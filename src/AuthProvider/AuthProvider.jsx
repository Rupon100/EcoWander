import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../ultis/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const registerUser = (email,pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    

    const contextValue = {
        user,
        setUser,
        registerUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;