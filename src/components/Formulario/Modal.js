import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import {Link, NavLink} from 'react-router-dom';

class Modalf extends React.Component {

  state = {

    ModalText: '¿Desea guardar sus cambios?',
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'Guardando cambios',
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
    console.log('Cancelar');
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (

        <div  className= "modal">
      <div>
        <Button type="primary" onClick={this.showModal}>Aceptar</Button>
        <Modal title="Cambios"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>

       </div>
    );
  }
}

export default Modalf;
