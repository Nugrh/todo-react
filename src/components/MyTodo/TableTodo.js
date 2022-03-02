import React from "react";
import { Table, Space, Divider, Popconfirm, message } from "antd";
import EditModal from "./Modal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../features/Todos";
import CreateModal from "./Modal/CreateModal";

const TableTodo = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos.value);

    const columns = [
        {
            title: "Task",
            dataIndex: "task",
            key: "task",
            render: (text) => <div>{text}</div>,
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            fixed: "right",
            width: 256,
            render: (rows, record) => [
                <Space split={<Divider type="vertical" />} size="middle">
                    <a>Done</a>

                    {/* EDIT DATA MODAL */}
                    <EditModal todo={record.todo} id={rows} />
                    {/* id={id} untuk mengirim data ID untuk parameter function di EditModal component */}

                    {/* DELETE DATA */}
                    <Popconfirm // popup konfirmasi yakin hapus data?
                        title="Sure to delete this task?"
                        onConfirm={() => {
                            // manggil function redux deleteTask di "../features/Todos"
                            dispatch(deleteTask({ id: rows }));
                            message.success('Task deleted');
                        }}
                    >
                        <a >Delete</a>
                    </Popconfirm>
                </Space>
            ],
        },
    ];

    return (
        <div>
            <CreateModal />
            <Table columns={columns} dataSource={tasks} />
        </div>
    );
};

export default TableTodo;
