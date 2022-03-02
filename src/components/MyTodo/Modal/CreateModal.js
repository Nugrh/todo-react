import React, { useState } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../../features/Todos";
import CreateForm from "./Form/CreateForm";

const CreateModal = () => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        dispatch(
            addTask({
                id: Math.floor(Math.random() * 99999999),
                task: values.task,
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
