import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Hangman = () => {
    const { name } = useContext(AuthContext);

    return (
        <>
            Hangman
        </>
    );
};

export default Hangman;