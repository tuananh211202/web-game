import { Button, Col, FloatButton, Image, Row, Select, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LiaHandPaper, LiaHandRock, LiaHandScissors, LiaHistorySolid } from "react-icons/lia";
import { TbQuestionMark } from "react-icons/tb";
import { BsPause, BsPlay, BsThreeDotsVertical } from "react-icons/bs";
import "../styles/RPSGame.css";
import logo from "../images/rock-paper-scissors.png";

const { Title } = Typography;

const RPSGame = () => {
    const { name } = useContext(AuthContext);

    const [yourName, setYourName] = useState("");
    const [option, setOption] = useState("none");
    const [timer, setTimer] = useState(0);
    const [isPlay, setIsPlay] = useState(false);

    const handleClick = () => {
        setIsPlay(!isPlay);
    }

    useEffect(() => {
        setYourName(name);
    }, [name]);

    useEffect(() => {
        console.log(option);
    },[option]);

    return <>
        <Row className="w-screen h-screen relative">
            
            {/* play area */}
            <Col span={12} style={{ backgroundColor: "#FDAC53" }} className="flex items-center">
                <Row className="w-full">
                    <Title className="w-full flex justify-center">{yourName === "" ? "You" : yourName}</Title>
                    <Row className="w-full flex justify-center"><TbQuestionMark size={400}/></Row>
                </Row>
            </Col>
            <Col span={12} style={{ backgroundColor: "#3C9DF7" }} className="flex items-center">
                <Row className="w-full">
                    <Title className="w-full flex justify-center">Computer</Title>
                    <Row className="w-full flex justify-center"><TbQuestionMark size={400}/></Row>
                </Row>
            </Col>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} className="text-8xl">
                {/* 10 */}
                Bạn hòa
            </div>

            {/* logo + game mode + menu */}
            <Row className="w-full px-10 absolute top-8 flex justify-between items-center">
                <Row className="w-20 h-20 rounded-full bg-white">
                    <img src={logo} className="w-full h-full rounded-full" />
                </Row>
                <Row className="w-40">
                    <Select 
                        size="large" 
                        options={[
                            { value: "com", label: <strong>Đấu với máy</strong> }, 
                            { value: "human", label: <strong>Đấu với người</strong>}
                        ]} 
                        className="w-full"
                        defaultValue="com"
                    />
                </Row>
                <Row className="w-20 flex justify-end items-center">
                    <Button className="rounded-full bg-transparent w-20 h-20 p-0 m-0 border-none flex items-center justify-center">
                        <BsThreeDotsVertical size={40} color="white" />
                    </Button>
                </Row>
            </Row>

            {/* options */}
            <Row className="w-full absolute bottom-8">
                <Row className="w-full flex justify-between px-5">
                    <Row>
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHandRock size={40} color="black" />}
                            onClick={() => setOption("rock")}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHandScissors size={40} color="black" style={{ transform: 'rotate(-90deg)' }} />}
                            onClick={() => setOption("scissors")}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHandPaper size={40} color="black" />}
                            onClick={() => setOption("paper")}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 left-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={isPlay ? <BsPause size={40} color="black" /> : <BsPlay size={40} color="black" />}
                            onClick={handleClick}
                        />
                    </Row>
                    <Row>
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 right-hover"
                            style={{ width: "60px", height: "60px" }}
                            icon={<LiaHistorySolid size={40} color="black" />}
                            onClick={() => setOption("history")}
                        />
                        <Button 
                            className="rounded-full p-0 m-0 bg-white flex items-center justify-center mx-5 right-hover" 
                            style={{ width: "60px", height: "60px" }}
                            icon={<TbQuestionMark size={40} color="black" />}
                            onClick={() => setOption("question")}
                        />
                    </Row>
                </Row>
            </Row>

        </Row>
    </>
};

export default RPSGame;