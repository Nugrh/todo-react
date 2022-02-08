import React, { useState } from 'react';
import { Modal, Button } from 'antd';

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
                <p>Form Input Modal</p>
            </Modal>
        </>
    );
};

export default CreateModal;