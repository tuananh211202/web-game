import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [name, setName] = useState("");

    return (
        <AuthContext.Provider value={{ name, setName }}>
            {children}
        </AuthContext.Provider>
    );
};