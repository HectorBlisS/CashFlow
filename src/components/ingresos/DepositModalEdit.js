import React, {Component} from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

class DepositModalEdit extends Component {
    state = {
        ModalText: 'Hola pinche putita',
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {

        this.setState({
            ModalText: 'Registrando datos',
            confirmLoading: true,
        });

        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Cancelando');
        this.setState({
            visible: false,
        });
    }
    render (){
        const { visible, confirmLoading, ModalText } = this.state;
        const {textarea} = Input;
        return(
            <div>
                <Button type="primary" onClick={this.showModal}>Editar</Button>
                <Modal title="Title"
                       visible={visible}
                       onOk={this.handleOk}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}


                >
                    <label htmlFor="fecha">Fecha</label>
                    <br/>
                    <input type="date"/>
                    <br/>

                    <label htmlFor="tipo">Tipo</label>
                    <br/>
                    <input type="text"/>
                    <br/>

                    <label htmlFor="descrip">Descripción</label>
                    <br/>
                    <textarea type="text" autosize={{ minRows: 2, maxRows: 6 }}/>

                    <br/>

                    <label htmlFor="monto">Monto</label>
                    <br/>
                    <input type="number"/>
                    <br/>


                    <div style={{ margin: '24px 0' }} />

                </Modal>
            </div>

        );


    }

}

export default DepositModalEdit;