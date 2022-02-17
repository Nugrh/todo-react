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
            render: (rows, record) => [
                <Space split={<Divider type="vertical" />} size="middle">
                    <a>Done</a>

                    {/* EDIT DATA MODAL */}
                    <EditModal id={rows} />
                    {/* id={id} untuk mengirim data ID untuk parameter function di EditModal component */}

                    {/* DELETE DATA */}
                    <Popconfirm // popup konfirmasi yakin hapus data?
                        title="?"
                        onConfirm={() => {
                            dispatch(deleteTodo({ id: rows }));
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