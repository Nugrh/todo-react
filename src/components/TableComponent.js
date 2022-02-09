import React from 'react';
import { Table, Space, Row, Col, Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import EditModal from './EditModal';
import { connect } from "react-redux";
import CreateModal from './CreateModal';
import { getTodosList } from '../actions/TodoAction';

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

            {props.getTodosList ?
                <div>
                    <Table columns={columns} dataSource={props.getTodosList} />
                </div>
                : null}
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        getTodosList: state.todos.getTodosList,
        errorTodoslist: state.todos.errorTodoslist
    }
)

export default connect(mapStateToProps)(TableComponent)
