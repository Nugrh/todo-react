import { Modal, Button } from 'antd';
import FormCreate from './FormCreate';
import React from 'react';

class CreateModal extends React.Component {
    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleSubmit = (data) => {
        console.log("handle submit: ", data);
    };

    render() {
        const { visible, loading } = this.state;
        return (
            <>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </Button>
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={''}
                >
                    <FormCreate onSubmit={(data) => this.handleSubmit(data)} />
                </Modal>
            </>
        );
    }
}

export default CreateModal;