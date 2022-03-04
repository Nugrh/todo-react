import React from "react";
import { Modal, Input, Form, message } from "antd";

const EditForm = ({ visible, onUpdate, onCancel, task }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Edit"
      okText="Edit"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onUpdate(values);
            message.success("Task edited");
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={(form.resetFields(), onCancel)}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
        autoComplete="off"
      >
        <Form.Item
          name="newTask"
          rules={[
            {
              required: true,
              message: "Task cannot empty!",
            },
          ]}
        >
          <Input placeholder="Input todo..." defaultValue={task} autoFocus />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditForm;
