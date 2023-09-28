import { Button, Row, Typography } from "antd";
import { GiPunchBlast } from "react-icons/gi";
import { BiTime } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
        {/* Game list */}
        <Row className="p-20">
            <Button danger size="large" icon={<GiPunchBlast />} className="flex items-center m-2" onClick={() => navigate('rps-game')}>Oẳn tù tì</Button>
            <Button danger size="large" icon={<BiTime />} className="flex items-center m-2" onClick={() => navigate("digital-clock")}>Đồng hồ</Button>
        </Row>
    </>
  );
}

export default HomePage;
