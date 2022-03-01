import React from "react";
import { Table, Space, Divider, Popconfirm, message } from "antd";
import EditModal from "./Modal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../features/Todos";
import CreateModal from "./Modal/CreateModal";

const TableTodo = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos.value);

    const columns = [
        {
            title: "Task",
            dataIndex: "todo",
            key: "todo",
            render: (text) => <div>{text}</div>,
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            fixed: "right",
            width: 100,
            render: (rows, record) => [
                <Space split={<Divider type="vertical" />} size="middle">
                    {/* DONE CHECKBOX */}
                    <a>Done</a>

                    {/* EDIT DATA MODAL */}
                    <EditModal todo={record.todo} id={rows} />
                    {/* id={id} untuk mengirim data ID untuk parameter function di EditModal component */}

                    {/* DELETE DATA */}
                    <Popconfirm // popup konfirmasi yakin hapus data?
                        title="Sure to delete this task?"
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
        <div>
            <CreateModal />
            <Table columns={columns} dataSource={tasks} pagination={{ defaultPageSize: 5 }} />
        </div>
    );
};

export default TableTodo;
