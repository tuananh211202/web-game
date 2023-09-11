import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Chess = () => {
    const { name } = useContext(AuthContext);

    return (
        <>
            Chess
        </>
    );
};

export default Chess;