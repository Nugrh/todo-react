import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/Todos";

const CreateModal = (todoId) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        dispatch(
            updateTodo({
                id: todoId,
                todo: newTodo,
            })
        );
        console.log("ID: ", todoId, " Todo: ", newTodo);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                    {/* <p>{this.props.todoId}</p> */}
                    <Input
                        type="text"
                        placeholder="Edit Todo..."
                        onChange={(event) => {
                            setNewTodo(event.target.value);
                        }}
                    />
                </div>
            </Modal>
        </>
    );
};

export default CreateModal;
