import React from 'react';
import { Table, Space, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'Todo',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Change</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const TableComponent = (props) => {

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>
                    <Table columns={columns} dataSource={props.users} />
                </Col>
            </Row>
        </div>
    )
}

export default TableComponent;