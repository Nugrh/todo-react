import React, { Component } from "react";
import "antd/dist/antd.less";
import HomeComponent from "./components/HomeComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "antd";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={16} offset={4}>
                        <HomeComponent style={{ color: "#fafafa" }} />
                    </Col>
                </Row>
            </div>
        );
    }
}
