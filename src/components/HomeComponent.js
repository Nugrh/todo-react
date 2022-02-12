import { Card } from "antd";
import React from "react";
import CreateModal from "./CreateModal";
import TableComponent from "./TableComponent";

function HomeComponent() {
    return (
        <div>
            <Card title="Todo List" style={{ marginTop: 64 }}>
                <CreateModal />
                <TableComponent />
            </Card>
        </div>
    );
}

export default HomeComponent;
