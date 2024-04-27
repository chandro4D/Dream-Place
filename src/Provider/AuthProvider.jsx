import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [loading,setLoading] = useState(true)

    // create user .................................
    const createUser =(email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    // ------------login--------------------
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // ----------Google Login-------------
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // ---------Github Login------------
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    // ----------update profile------------
    const updateUserProfile = (name,PhotoURL) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL:PhotoURL
        })
    }
    // -------------logout------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user in auth state change',currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const info = {
        setUser,
        createUser,
        signIn,
        googleLogin,
        githubLogin,
        updateUserProfile,
        logOut,
        user,
        loading,
        setLoading
        

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;