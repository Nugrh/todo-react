import React from "react";
import { Table, Space, Divider, Popconfirm } from "antd";
import "antd/dist/antd.css";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/Todos";

const TableComponent = (props) => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);

    const columns = [
        {
            title: "TODO",
            dataIndex: "todo",
            key: "todo",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "ACTION",
            key: "action",
            fixed: "right",
            width: 100,
            render: (text, record) => (
                <Space split={<Divider type="vertical" />} size="middle">
                    <a>Done</a>
                    <EditModal />

                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => {
                            dispatch(deleteTodo({ id: 2 }));
                        }}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ marginTop: 12 }}>
            <Table columns={columns} dataSource={todoList} rowKey="id" />
        </div>
    );
};

export default TableComponent;
