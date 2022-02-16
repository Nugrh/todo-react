import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/Todos";

const CreateModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    //        ^         ^
    //        |         |
    //        |         L-------------------------------variabel untuk menampung data dari input yang ada di bawah
    //        |         
    // variabel yang menyimpan todo yang baru 


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <a onClick={showModal}>Edit</a>
            <Modal
                title="Edit"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button onClick={() => {
                        dispatch(
                            updateTodo({
                                id: 1, // (sementara pake id yang ada, jadi klo id=1, todo ke-1 akan terubah) ngambil id dari tabel
                                todo: newTodo, // todo yang dari input
                            })
                        );
                        setIsModalVisible(false);

                    }

                    }>OK</Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,
                ]}
            >
                <div>
                    <Input
                        type="text"
                        placeholder="Edit Todo..."
                        onChange={(event) => {
                            setNewTodo(event.target.value); // menyimpan data input untuk baris ke 9(setNewTodo)
                        }}
                    />
                </div>
            </Modal>
        </>
    );
};

export default CreateModal;
