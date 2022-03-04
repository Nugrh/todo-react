import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../features/Todos";
import EditForm from "./Form/EditForm";

const EditModal = ({ id, task }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onUpdate = (values) => {
    console.log("Received values of form: ", values.newTask);
    console.log("Received id: ", id);
    dispatch(
      updateTask({
        id: id,
        task: values.newTask,
        completed: false,
      })
    );
    setVisible(false);
  };

  return (
    <div>
      <EditForm
        task={task}
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
    </div>
  );
};

export default EditModal;
