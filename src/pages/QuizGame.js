import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const QuizGame = () => {
    const { name } = useContext(AuthContext);

    return (
        <>
            QuizGame
        </>
    );
};

export default QuizGame;