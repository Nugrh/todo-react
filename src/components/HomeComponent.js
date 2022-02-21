import { Card } from "antd";
import React from "react";
import CreateModal from "./Modal/CreateModal";
import TableComponent from "./TableComponent";

const HomeComponent = () => {
    return (
        <div>
            <Card title="Todo List" style={{ marginTop: 48 }}>
                <CreateModal />
                <TableComponent />
            </Card>
        </div>
    );
}

export default HomeComponent;
