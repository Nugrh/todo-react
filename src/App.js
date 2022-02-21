import React from "react";
import HomeComponent from "./components/HomeComponent";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

const App = () => {
    return (
        <div className="App">
            {/* set baris */}
            <Row>
                {/* set kolom */}
                <Col span={16} offset={4}>
                    {/* panggil komponen Home di "./components/HomeComponent" */}
                    <HomeComponent />
                </Col>
            </Row>
        </div>
    )
}

export default App
