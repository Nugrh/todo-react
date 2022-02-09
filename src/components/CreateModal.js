import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { postTodosCreate } from '../actions/TodoAction';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    const handleSubmit = (data) => {
        console.log(data)
    }

    return (
        <Modal
            visible={visible}
            title="Tambahkan TODO"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="create-todo"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="todo"
                    label="Todo"
                    rules={[
                        {
                            required: true,
                            message: 'Anda belum memasukkan todo!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const CreateModal = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
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
                Tambah Todo
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default CreateModal