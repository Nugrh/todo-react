import React, { useState } from 'react';
import { Modal, Button, Form, Input, onFinishFailed, onFinish } from 'antd';

const CreateModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add TODO
            </Button>
            <Modal title="Create" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="todo"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Todo"
                        name="todo"
                        rules={[{ required: true, message: 'Please input your todo!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CreateModal;