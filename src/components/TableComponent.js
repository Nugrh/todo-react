import React from 'react';
import { Table, Space, Row, Col, Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import EditModal from './EditModal';

const columns = [
    {
        title: 'Todo',
        dataIndex: 'todo',
        key: 'todo',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: (text, record) => (
            <Space split={<Divider type="vertical" />} size="middle">
                <a>Done</a>
                <EditModal />
                <a>Delete</a>
            </Space>
        ),
    },
];

const TableComponent = (props) => {

    return (
        <div>
            <Table columns={columns} dataSource={props.users} />
        </div>
    )
}

export default TableComponent;