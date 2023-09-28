import { Button, Row, Typography } from "antd";
import { GiPunchBlast } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
        {/* Game list */}
        <Row className="p-20">
            <Button danger size="large" icon={<GiPunchBlast />} className="flex items-center" onClick={() => navigate('rps-game')}>Oẳn tù tì</Button>
        </Row>
    </>
  );
}

export default HomePage;
