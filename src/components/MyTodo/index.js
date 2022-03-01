import { Card } from "antd";
import React from "react";
import TableTodo from "./TableTodo";
import CreateModal from "./Modal/CreateModal";

const MyTodo = () => {
    return (
        <div>
            <Card>
                <TableTodo />
            </Card>
        </div>
    );
};

export default MyTodo;
