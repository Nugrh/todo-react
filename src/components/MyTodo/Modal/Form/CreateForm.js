import React from "react";
import { Modal, Input, Form, message } from "antd";

const CreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create"
      okText="Create"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
            message.success("Task added");
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="task"
          rules={[
            {
              required: true,
              message: "Task cannot be empty!",
            },
          ]}
        >
          <Input placeholder="Input todo..." autoFocus />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateForm;
