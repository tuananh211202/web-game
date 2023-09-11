import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const CaroGame = () => {
    const { name } = useContext(AuthContext);

    return (
        <>
            CaroGame
        </>
    );
};

export default CaroGame;