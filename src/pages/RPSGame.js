import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { Col, Pagination, Row, Table } from "antd";
import { randomArrayOrder, randomIntNumber } from "../utils/random";
import { checkTime } from "../utils/format-time";

const commonStyleClassName = "w-40 h-40 absolute border-solid flex items-center justify-center ";

const iconList = {
    rock: <FaHandRock color="white" size={30} />,
    scissors: <FaHandScissors color="white" size={30} style={{ transform: 'rotate(90deg)' }} />,
    paper: <FaHandPaper color="white" size={30}/>
};

const getChoosen = (index) => {
    return Object.keys(iconList)[index][0];
}

const getTextByChoosen = (choosen) => {
    if(choosen === "r") return " búa";
    if(choosen === "s") return " kéo";
    if(choosen === "p") return " bao";
    return "";
}

const getResult = (com, per) => {
    if(com === per) return "D";
    if(com === "r"){
        if(per === "s") return "L";
        return "W";
    }
    if(com === "s"){
        if(per === "p") return "L";
        return "W";
    }
    if(com === "p"){
        if(per === "r") return "L";
        return "W";
    }
    return "";
}

const columns = [
    {
        title: 'Lựa chọn của bạn',
        dataIndex: 'you',
        key: 'you',
    },
    {
        title: 'Lựa chọn của máy',
        dataIndex: 'com',
        key: 'com',
    },
    {
        title: 'Kết quả',
        dataIndex: 'result',
        key: 'result',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time',
    }
]

const RPSGame = () => {
    const { name } = useContext(AuthContext);
    const [dataSource, setDataSource] = useState([]);

    const [choosen, setChoosen] = useState(-1);
    const [message, setMessage] = useState("chưa chọn gì cả!");
    const [computerMessage, setComputerMessage] = useState("chờ");
    const [order, setOrder] = useState([0,1,2]);
    const [time, setTime] = useState('');

    useEffect(() => {
        if(choosen !== -1){
            const match = {
                key: dataSource.length ? "" + (parseInt(dataSource[dataSource.length - 1].key) + 1) : '0',
                you: 'Bạn chọn ' + getTextByChoosen(getChoosen(choosen)),
                com: 'Máy ' + computerMessage,
                result: 'Bạn ' + message,
                time: time
            };
            setDataSource([...dataSource, match]);
        }
        setChoosen(-1);
    }, [order]);

    useEffect(() => {
        const computerChoosen = randomIntNumber(0,2);
        if(choosen === -1){
            setMessage("chưa chọn gì cả!");
            setComputerMessage("chờ");
        }else{
            const now = new Date();
            const h = checkTime(now.getHours());
            const m = checkTime(now.getMinutes());
            const s = checkTime(now.getSeconds());
            setTime(h + ':' + m + ':' + s);
            
            const res = getResult(getChoosen(computerChoosen), getChoosen(choosen));
            setComputerMessage('chọn ' + getTextByChoosen(getChoosen(computerChoosen)));
            if(res === "D") setMessage("hòa!");
            else if(res === "W") setMessage("thắng!");
            else if(res === "L") setMessage("thua!");
        }
    },[choosen]);

    return (
        <>
            <Row>
                <Col span={8}>
                    <div className="w-80 h-80 rounded-full relative m-10">
                        <button 
                            disabled={choosen !== -1}
                            className={commonStyleClassName + "rounded-tl-full top-0 left-0 border-b-4 border-r-4 bg-sky-600 hover:bg-sky-700"}
                            onClick={() => setChoosen(order[0])}
                        >
                            {Object.values(iconList)[order[0]]}
                        </button>
                        <button 
                            disabled={choosen !== -1}
                            className={commonStyleClassName + "rounded-tr-full top-0 left-40 border-b-4 border-l-4 bg-red-600 hover:bg-red-700"}
                            onClick={() => setChoosen(order[1])}
                        >
                            {Object.values(iconList)[order[1]]}
                        </button>
                        <button 
                            disabled={choosen !== -1}
                            className={commonStyleClassName + "rounded-bl-full top-40 left-0 border-t-4 border-r-4 bg-orange-600 hover:bg-orange-700"}
                            onClick={() => setChoosen(order[2])}
                        >
                            {Object.values(iconList)[order[2]]}
                        </button>
                        <button 
                            className={commonStyleClassName + "rounded-br-full top-40 left-40 border-t-4 border-l-4 bg-neutral-500 hover:bg-neutral-600"}
                            onClick={() => setOrder(randomArrayOrder(order))}
                        >
                            <IoMdRefresh color="white" size={30} />
                        </button>
                    </div>
                </Col>
                <Col span={16} className="my-32">
                    <Row className="w-full text-2xl py-2">Chọn búa, kéo hoặc bao để biết bạn thắng hay thua:</Row>
                    <Row className="w-full text-base">{choosen === -1 ? "" : "Bấm tải lại để chơi ván mới"}</Row>
                    <Row className="w-full text-4xl py-2 text-red-500">Máy {computerMessage}, Bạn {message}</Row>
                </Col>
            </Row>
            <Row className="text-base px-10 pb-5">Lịch sử thi đấu của &nbsp;<strong className="text-red-500">{name}</strong>:</Row>
            <Table className="px-10" bordered size="small" columns={columns} dataSource={dataSource} pagination={<Pagination defaultPageSize={5} />} />
        </>
    );
};

export default RPSGame;