import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/Todos";

const CreateModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todo, setTodo] = useState("");

    return (
        <>
            <a type="primary" onClick={showModal}>
                Edit
            </a>
            <Modal
                title="Tambah"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button
                        onClick={() => {
                            dispatch(
                                addTodo({
                                    id: todoList[todoList.length - 1].id + 1,
                                    todo,
                                })
                            );
                        }}
                    >
                        OK
                    </Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,
                ]}
            >
                <div>
                    <Input
                        type="text"
                        placeholder="Masukkan Todo..."
                        onChange={(event) => {
                            setTodo(event.target.value);
                        }}
                    />
                    <Form>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default CreateModal;
