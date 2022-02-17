import React, { useState } from "react";
import { Table, Space, Divider, Popconfirm, Button, Modal, Input } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/Todos";

const TableComponent = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (id) => {

        setIsModalVisible(true);
        return (
            editModal(id)
        )
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //                            default value
    //                                  |
    //                                  V
    const [newTodo, setNewTodo] = useState("");
    //        ^         ^             
    //        |         |             
    //        |         L-----------------------variabel untuk menampung data dari input yang ada di bawah
    //        |         
    // variabel yang menyimpan todo yang baru
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);


    // const columns adalah header dari tabel yang isinya ada di dalam ini
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
            render: (rows, record) => (
                <Space split={<Divider type="vertical" />} size="middle">
                    <a>Done</a>

                    {/* EDIT DATA MODAL----------------------------------------------------------------- */}
                    <div>
                        <Button type="primary" onClick={
                            () =>
                                showModal(rows)
                        }>
                            ID: {rows}
                        </Button>
                        {editModal()}
                    </div>

                    {/* <editModal id={rows} /> */}
                    {/* EDIT DATA MODAL----------------------------------------------------------------- */}


                    {/* DELETE DATA */}
                    < Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => {
                            dispatch(deleteTodo({ id: rows }));
                        }}
                    >
                        <a>Delete</a>
                    </Popconfirm >
                </Space >
            ),
        },
    ];

    const editModal = (id) => {
        { console.log("ID: ", id) }
        { console.log("Todo: ", newTodo) }
        return (
            < Modal title={id} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={
                [
                    <Button onClick={() => {
                        dispatch(
                            updateTodo({
                                id: id, // ngambil id dari tabel
                                todo: newTodo, // todo yang dari input
                            })
                        );
                        setIsModalVisible(false);
                    }

                    }>OK {id}</Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,

                ]} >
                <p>ID:</p>


                <Input
                    type="text"
                    placeholder="Edit Todo..."
                    onChange={(event) => {
                        setNewTodo(event.target.value); // menyimpan data input untuk baris ke 9(setNewTodo)
                    }}
                />
            </Modal >
        )
    }

    return (
        <div style={{ marginTop: 12 }}>

            <Table columns={columns} dataSource={todoList} />
        </div>
    );
};

export default TableComponent;
