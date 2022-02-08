import { Button, Row, Col, Space } from 'antd';
import React from 'react';
import CreateModal from './CreateModal';
import TableComponent from './TableComponent';

export default function HomeComponent(props) {
    return (
        <div className='space-align-container'>
            <Row>
                <Col span={16} offset={4}>
                    <CreateModal />
                    <TableComponent users={props.users} />
                </Col>
            </Row>
        </div>
    );
}
