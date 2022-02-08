import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const EditModal = () => {
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
                Edit
            </Button>
            <Modal title="Edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Form Edit Modal</p>
            </Modal>
        </>
    );
};

export default EditModal;