import React, { useState } from "react";
import { Table, Space, Divider, Popconfirm } from "antd";
import "antd/dist/antd.css";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/Todos";

const TableComponent = (props) => {
    // TODO: pass data id to <EditModal />

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todoId, setTodoId] = useState("");

    const getTodoId = (id) => {
        setTodoId = id;
    };

    const columns = [
        {
            title: "TODO",
            dataIndex: "todo",
            key: "todo",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "ACTION",
            dataIndex: "id",
            key: "id",
            fixed: "right",
            width: 100,
            render: (id) => [
                <Space split={<Divider type="vertical" />} size="middle">
                    <a>Done</a>

                    {/* EDIT DATA MODAL */}
                    <EditModal todoId={id} />
                    {/* todoId={id} untuk mengirim data ID untuk edit */}

                    {/* DELETE DATA */}
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => {
                            dispatch(deleteTodo({ id: id }));
                        }}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>,
            ],
        },
    ];

    return (
        <div style={{ marginTop: 12 }}>
            <Table columns={columns} dataSource={todoList} rowKey="id" />
        </div>
    );
};

export default TableComponent;
