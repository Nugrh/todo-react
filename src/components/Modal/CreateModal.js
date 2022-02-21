import React, { useState } from "react";
import { Modal, Input, Button, Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../features/Todos";
import CreateForm from "./Form/CreateForm";

const CreateModal = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);

    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        dispatch(
            addTodo({
                id: todoList[todoList.length - 1].id + 1,
                todo: values.todo,
            })
        );
        setVisible(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Create Todo
            </Button>
            <CreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default CreateModal;
