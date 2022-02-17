import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/Todos";

const EditModal = (id) => {
    const [isModalVisible, setIsModalVisible] = useState(false);



    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }; const dispatch = useDispatch();
    //                            default value
    //                                  |
    //                                  V
    const [newTodo, setNewTodo] = useState("");
    //        ^         ^             
    //        |         |             
    //        |         L-----------------------variabel untuk menampung data dari input yang ada di bawah
    //        |         
    // variabel yang menyimpan todo yang baru

    return (
        <>
            <Modal title={id} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
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
            ]}>
                <p>ID: {id}</p>
                <Input
                    type="text"
                    placeholder="Edit Todo..."
                    onChange={(event) => {
                        setNewTodo(event.target.value); // menyimpan data input untuk baris ke 9(setNewTodo)
                    }}
                />
            </Modal>
        </>
    );
};

export default EditModal;
