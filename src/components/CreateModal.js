import React, { useState } from "react";
import { Modal, Input, Form, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/Todos";

const CreateModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todo, setTodo] = useState("");

    // function untuk menampilkan modal
    const showModal = () => {
        setIsModalVisible(true); // tampilkan modal = true
    };

    // function ketika tombol dipencet "OK"
    const handleOk = () => {
        // menambahkan todo
        dispatch(
            addTodo({
                id: todoList[todoList.length - 1].id + 1,
                todo,
            })
        );
        // modal akan hilang setelah dipencet "OK"
        setIsModalVisible(false);
    };

    // function untuk membatalkan / keluar dari modal
    const handleCancel = () => {
        setIsModalVisible(false); // tampilkan modal = false
    };

    return (
        <>
            {/*            function modal yang ada di baris kode ke 14  */}
            {/*                                 |                       */}
            {/*                                 V                       */}
            <Button type="primary" onClick={showModal}>
                {/*                    ^                    */}
                {/*                    |                    */}
                {/*        lakukan sesuatu ketika di klik   */}

                Tambah Todo
            </Button>

            {/* MODAL */}
            <Modal
                title="Tambah" // Header untuk modal
                visible={isModalVisible} // biar modal nampil
                onCancel={handleCancel} // jika tombol cancel di tekan, maka panggil function di baris kode 32
                footer={[
                    <Button
                        onClick={handleOk} // ketika di klik, maka panggil function di baris ke 19
                        htmlType="submit"
                    >
                        OK
                    </Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,
                    //                    ^
                    //                    |
                    // panggil function baris kode ke 32 jika tombol dipencet

                ]}
            >
                <div>
                    {console.log(todo)}
                    <Input
                        name="todo"
                        onChange={(event) => {
                            setTodo(event.target.value);
                        }}
                        required
                        autoComplete="off"
                        placeholder="Tambah Todo..."
                    />
                </div>
            </Modal>
        </>
    );
};

export default CreateModal;
