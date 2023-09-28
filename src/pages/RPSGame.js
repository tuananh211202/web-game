import { Button, Col, FloatButton, Image, Row, Select, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LiaHandPaper, LiaHandRock, LiaHandScissors, LiaHistorySolid } from "react-icons/lia";
import { TbQuestionMark } from "react-icons/tb";
import { BsPause, BsPlay, BsThreeDotsVertical } from "react-icons/bs";
import { MdReplay } from "react-icons/md";
import "../styles/RPSGame.css";

const { Title } = Typography;

const options = [ "rock", "scissors", "paper" ];

const IconWithType = ({ type }) => {
    const className = "rounded-full bg-white border-solid border-2 border-black";
    return <>
        {
            type === "rock" ? <LiaHandRock size={350} className={className} color="black" /> :
            type === "scissors" ? <LiaHandScissors  style={{ transform: 'rotate(-90deg)' }} size={350} className={className} color="black" /> :
            type === "paper" ? <LiaHandPaper size={350} className={className} color="black" /> :
            <TbQuestionMark size={350} className={className} />
        }
    </>
}

const RPSGame = () => {
    const { name } = useContext(AuthContext);

    const [yourName, setYourName] = useState("");
    const [option, setOption] = useState("none");
    const [comOption, setComOption] = useState("none");
    const [second, setSecond] = useState(0);

    const handleClick = () => {
        setSecond(10);
        setOption("none");
        setComOption("none");
    }

    useEffect(() => {
        if(second > 0) {
            const timer = setInterval(() => {
                setSecond((prevSecond) => prevSecond - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
        console.log("Hello");

        const comOption = options[Math.floor(Math.random() * 3)];
        console.log(comOption);
        setComOption(comOption);
    }, [second]);

    useEffect(() => {
        setYourName(name);
    }, [name]);

    useEffect(() => {
        console.log(option);
    },[option]);
    
    useEffect(() => {
        setComOption("none");
    }, []);

    return <>
        <Row className="w-screen h-screen">
            
            {/* play area */}
            <Col span={12} style={{ backgroundColor: "#FDAC53" }} className="flex items-center">
                <Row className="w-full">
                    <Title className="w-full flex justify-center">{yourName === "" ? "You" : yourName}</Title>
                    <Row className="w-full flex justify-center relative mt-5 mb-10 items-center">
                        <IconWithType type={option} />
                        <Row className="absolute right-0 p-5 text-3xl">
                            {second}
                        </Row>
                    </Row>
                </Row>
            </Col>
            <Col span={12} style={{ backgroundColor: "#3C9DF7" }} className="flex items-center">
                <Row className="w-full">
                    <Title className="w-full flex justify-center">Computer</Title>
                    <Row className="w-full flex justify-center relative mt-5 mb-10 items-center">
                        <IconWithType type={comOption} />
                        <Row className="absolute left-0 p-5 text-3xl" style={{ color: "#fff" }}>
                            {second}
                        </Row>
                    </Row>
                </Row>
            </Col>

            {/* options */}
            <Row className="w-full absolute bottom-8">
                <Row className="w-full flex justify-between px-5">
                    <Row>
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHandRock size={40} color="black" />}
                            onClick={() => setOption("rock")}
                            disabled={second === 0}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHandScissors size={40} color="black" style={{ transform: 'rotate(-90deg)' }} />}
                            onClick={() => setOption("scissors")}
                            disabled={second === 0}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHandPaper size={40} color="black" />}
                            onClick={() => setOption("paper")}
                            disabled={second === 0}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<MdReplay size={40} color="black" />}
                            onClick={handleClick}
                            disabled={second !== 0}
                        />
                    </Row>
                    <Row>
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 right-hover"
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHistorySolid size={40} color="black" />}
                            // onClick={() => setOption("history")}
                            disabled={second !== 0}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 right-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<TbQuestionMark size={40} color="black" />}
                            // onClick={() => setOption("question")}
                            disabled={second !== 0}
                        />
                    </Row>
                </Row>
            </Row>

        </Row>
    </>
};

export default RPSGame;