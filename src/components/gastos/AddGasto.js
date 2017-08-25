import React, {Component} from 'react';
import { Form, DatePicker, Input, InputNumber , Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import InputItem from './InputItem';
import DropDownList from './DropDownList';
import '../login/Login.css';



const FormItem = Form.Item;



class AddGasto extends Component{
    state = {
        gasto:{
            descripcion: '',
            precio: 0.0
        }
    }
    handleSubmit = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let gasto = this.state.gasto;
        gasto[nombre] = valor;
        this.setState({gasto});
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            widht:"100%",
            height:"80vh",
            display:"block"
        };
        const categorias = [{
            value: 'Categoria 1',
            label: 'Categoria 1',

        }, {
            value: 'Categoria 2',
            label: 'Categoria 2',

        },
        {
            value: 'Categoria 3',
            label: 'Categoria 3',

        },
        {
            value: 'Categoria 4',
            label: 'Categoria 4',

        }];

        const tipoPago = [{
            value: 'Efectivo',
            label: 'Efectivo',

        }, {
            value: 'Tarjeta Credito',
            label: 'Tarjeta Credito',

        }];


        return(
            <div style={center}>
                <Form style={{padding:"3rem"}}>
                    <InputItem tipo="number" nombre="precio" handleSubmit={this.handleSubmit} etiqueta="Precio"/>
                    <InputItem tipo="date" nombre="fecha" handleSubmit={this.handleSubmit} etiqueta="Fecha"/>
                    <InputItem tipo="text" nombre="descripcion" handleSubmit={this.handleSubmit} etiqueta="Descripción"/>
                    <DropDownList data={categorias} nombre="categoria" etiqueta="Categoria"/>
                    <DropDownList data={tipoPago} nombre="tipoPago" etiqueta="Tipo de pago"/>
                </Form>

            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(AddGasto);
export default WrappedNormalLoginForm;
