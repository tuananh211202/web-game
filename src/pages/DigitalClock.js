import { Button, Row } from "antd";
import { useEffect, useState } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

const formatNumber = (num) => {
    return num < 10 ? "0" + num : "" + num;
}

const getCurrentTime = (currentTime) => {
    return formatNumber(currentTime.getHours()) + ":" + formatNumber(currentTime.getMinutes()) + ":" + formatNumber(currentTime.getSeconds());
}

const DigitalClockPage = () => {
    const [mode, setMode] = useState("light");
    const [time, setTime] = useState("");
    const [theme, setTheme] = useState("bg-white text-black");

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date();
            setTime(getCurrentTime(currentTime));
        }, 1000);

        return () =>  clearInterval(timer);
    }, [time]);

    useEffect(() => {
        mode === "light" ? setTheme("bg-white text-black") : setTheme("bg-black text-white");
    }, [mode]);

    return <>
        <Row className={"w-screen h-screen flex items-center justify-center text-9xl relative " + theme}>
            {time}
            <Button 
                className="m-0 p-0 rounded-full bg-none border-none absolute top-6 right-6 flex items-center justify-center"
                icon={mode === "light" ? <MdDarkMode size={30} color="black" /> : <MdLightMode color="white" size={30} />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
            />
        </Row>
    </>
};

export default DigitalClockPage;