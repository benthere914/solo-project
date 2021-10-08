import { createContext, useContext, useState } from "react";

export const AuthModalContext = createContext();
export const useAuthModal = () =>  useContext(AuthModalContext);
export const AuthModalProvider = ({children}) => {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    return (
        <AuthModalContext.Provider value={{loginModal, setLoginModal, signupModal, setSignupModal}}>
            {children}
        </AuthModalContext.Provider>
    )
}
