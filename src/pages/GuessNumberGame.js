import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const GuessNumberGame = () => {
    const { name } = useContext(AuthContext);

    return (
        <>
            GuessNumberGame
        </>
    );
};

export default GuessNumberGame;