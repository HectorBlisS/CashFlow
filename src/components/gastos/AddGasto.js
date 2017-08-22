import React, {Component} from 'react';
import { Form, DatePicker, Input, InputNumber , Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import '../login/Login.css';
import Carru from "../Carru";


const FormItem = Form.Item;



class AddGasto extends Component{
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
        const residences = [{
            value: 'Categoria 1',
            label: 'Categoria 1',

        }, {
            value: 'Categoria 2',
            label: 'Categoria 2',

        }];
        return(
            <div style={center}>
                <Form className="login-form">
                    <FormItem>
                        <InputNumber placeholder="Precio" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Descripción"/>
                    </FormItem>
                    <FormItem>
                        <DatePicker />
                    </FormItem>
                    <FormItem>
                        <Cascader options={residences} />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Entrar
                        </Button><br/>
                    </FormItem>

                </Form>

            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(AddGasto);
export default WrappedNormalLoginForm;