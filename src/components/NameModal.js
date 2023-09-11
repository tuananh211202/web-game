import { Button, Col, Form, Input, Modal, Row } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const NameModal = () => {
  const [form] = Form.useForm();
  const { name, setName } = useContext(AuthContext);
  const [open, setOpen] = useState(name === "");

  const handleFinish = () => {
    setName(form.getFieldValue("name"));
    setOpen(false);
  }

  return (
    <>
        {/* Enter name  */}
        <Modal centered open={open} footer={null} closeIcon={null}>
            <Form onFinish={handleFinish} form={form}>
                <Row>
                    <Col span={20}>
                        <Form.Item name="name" label="Name"  rules={[{ required: true, message: 'Hãy nhập tên của bạn!' }]}>
                            <Input placeholder="Nhập tên của bạn" />
                        </Form.Item>
                    </Col>
                    <Col span={4} className="flex justify-center">
                        <Form.Item>
                            <Button type="primary" danger htmlType="submit">
                                OK
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    </>
  );
}

export default NameModal;
