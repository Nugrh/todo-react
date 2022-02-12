import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/Todos";

const CreateModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        dispatch(
            addTodo({
                id: todoList[todoList.length - 1].id + 1,
                todo,
            })
        );
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todo, setTodo] = useState("");

    return (
        <>
            <a onClick={showModal}>Edit</a>
            <Modal
                title="Edit"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button onClick={handleOk}>OK</Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,
                ]}
            >
                <div>
                    <Input
                        type="text"
                        placeholder="Edit Todo..."
                        onChange={(event) => {
                            setTodo(event.target.value);
                        }}
                    />
                </div>
            </Modal>
        </>
    );
};

export default CreateModal;
