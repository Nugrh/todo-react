import React from "react";
import { Table, Space, Divider, Popconfirm, message } from "antd";
import EditModal from "./Modal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/Todos";
import Checkbox from "antd/lib/checkbox/Checkbox";
import EditForm from "./Modal/Form/EditForm";
import "../App.css";

const TableComponent = () => {

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);

    const columns = [
        {
            title: "TODO",
            dataIndex: "todo",
            key: "todo",
            render: (text) => <div>{text}</div>,
        },
        {
            title: "ACTION",
            dataIndex: "id",
            key: "id",
            fixed: "right",
            width: 100,
            render: (rows, record) => [
                <Space split={<Divider type="vertical" />} size="middle">
                    {/* DONE CHECKBOX */}
                    <Checkbox />

                    {/* EDIT DATA MODAL */}
                    <EditModal todo={record.todo} id={rows} />

                    {/* id={id} untuk mengirim data ID untuk parameter function di EditModal component */}

                    {/* DELETE DATA */}
                    <Popconfirm // popup konfirmasi yakin hapus data?
                        title="Are you sure to delete this task?"
                        onConfirm={() => {
                            // manggil function redux deleteTodo di "../features/Todos"
                            dispatch(deleteTodo({ id: rows }));
                            message.success('Task deleted');
                        }}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ],
        },
    ];

    return (
        <div style={{ marginTop: 12 }}>
            <Table columns={columns} dataSource={todoList} pagination={{ defaultPageSize: 5 }} rowKey="id" />
        </div>
    );
};

export default TableComponent;