import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const iconList = [
    <FaHandRock color="white" size={30} />,
    <FaHandScissors color="white" size={30} style={{ transform: 'rotate(90deg)' }} />,
    <FaHandPaper color="white" size={30}/>
];

const RPSGame = () => {
    const { name } = useContext(AuthContext);

    const [count, setCount] = useState(0);
    const [choosen, setChoosen] = useState(-1);
    const [message, setMessage] = useState("chưa chọn gì cả!");

    useEffect(() => {
        if(count === 0){
            let newMes = message;
            if(choosen !== -1) newMes = "thắng!";
            return () => {
                setMessage("đếm xong");
            }
        }

        const timer = setInterval(() => {
            if(count > 0)
                setCount((prevCount) => prevCount - 1);
        }, 1000);
    
        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return (
        <>
            <Row>
                <Col span={8}>
                    <div className="w-80 h-80 rounded-full relative m-10">
                        <button 
                            className="w-40 h-40 rounded-tl-full absolute top-0 left-0 border-solid border-b-4 border-r-4 bg-sky-600 hover:bg-sky-700 flex items-center justify-center"
                        >
                            {iconList[0]}
                        </button>
                        <button 
                            className="w-40 h-40 rounded-tr-full absolute top-0 left-40 border-solid border-b-4 border-l-4 bg-red-600 hover:bg-red-700 flex items-center justify-center"
                        >
                            {iconList[1]}
                        </button>
                        <button 
                            className="w-40 h-40 rounded-bl-full absolute top-40 left-0 border-solid border-t-4 border-r-4 bg-orange-600 hover:bg-orange-700 flex items-center justify-center"
                        >
                            {iconList[2]}
                        </button>
                        <button 
                            className="w-40 h-40 rounded-br-full absolute top-40 left-40 border-solid border-t-4 border-l-4 bg-neutral-500 hover:bg-neutral-600 flex items-center justify-center"
                            onClick={() => setCount(10)}
                        >
                            <IoMdRefresh color="white" size={30} />
                        </button>
                    </div>
                </Col>
                <Col span={16} className="my-28">
                    <Row className="w-full text-2xl py-2">Chọn búa, kéo hoặc bao để biết bạn thắng hay thua:</Row>
                    <Row className="w-full text-xl py-2">Đếm ngược: {count}</Row>
                    <Row className="w-full text-4xl py-2 text-red-500">Bạn {message}</Row>
                </Col>
            </Row>
        </>
    );
};

export default RPSGame;