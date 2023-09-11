import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const RPSGame = () => {
    const { name } = useContext(AuthContext);

    return (
        <>
            RPSGame
        </>
    );
};

export default RPSGame;