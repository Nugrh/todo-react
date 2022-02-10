import { Form, Input, Button, Select, Divider } from 'antd';
import { connect } from 'react-redux';
import React from 'react';
import { handleSubmit } from './HomeComponent';
import CreateModal from './CreateModal';
import { postTodosCreate } from '../actions/TodoAction';
import { getTodosList } from '../actions/TodoAction';

const { Option } = Select;

class FormCreate extends React.Component {
    formRef = React.createRef();

    render() {
        return (
            <div>
                <Form id='create-form' ref={this.formRef} name="control-ref" onSubmitCapture={this.handleSubmit} >
                    <Form.Item
                        name="todo"
                        label="Todo"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Divider orientation="right" orientationMargin="0" >
                        <Button htmlType='submit'>Submit</Button>
                    </Divider>
                </Form>
            </div >
        );
    }
}

export default connect()(FormCreate)