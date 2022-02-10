import { Row, Col } from 'antd';
import React, { Component } from 'react';
import CreateModal from './CreateModal';
import TableComponent from './TableComponent';
import { getTodosList } from '../actions/TodoAction';
import { connect } from 'react-redux';
import FormCreate from './FormCreate';

class HomeComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getTodosList())
    }

    handleSubmit(data) {
        console.log("asuuu" + data)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} offset={4}>
                        <CreateModal />
                        <TableComponent />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default connect()(HomeComponent)