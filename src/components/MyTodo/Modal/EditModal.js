import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../features/Todos";
import EditForm from "./Form/EditForm";

const EditModal = ({ id, todo }) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const onUpdate = (values) => {
      console.log('Received values of form: ', values);
      console.log('Received id: ', id);
        dispatch(
            updateTask({
                id: id,
                task: values.newTask,
            })
        );
        setVisible(false);
    };

    return (
        <div>
            <EditForm
                todo={todo}
                visible={visible}
                onUpdate={onUpdate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
            <a
                onClick={() => {
                    setVisible(true);
                }}
            >
                Edit
            </a>

        </div >
    );
};

export default EditModal;
