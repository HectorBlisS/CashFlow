import React, {Component} from 'react';
import { Form, Input, Button, Radio } from 'antd';
import Nombre from './Nombre';
import Image from './Image';
import Edad from './Edad';
import Iavatar from './Iavatar';
import { Card } from 'antd';
import './Form.css';
const FormItem = Form.Item;

    


class Formu1 extends React.Component {


  constructor() {   
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }



  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  render() {

    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 5 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 5, offset: 4 },
    } : null;

    const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            widht:"100%",
            height:"80vh",
            display:"block"
        };

    return (

        <div className="Form">    <Nombre/>  <br/><br/>   <br/> <Iavatar/> <br/>
          
         <div className="Cardf"> </div>
         
         
      <div>
        <Card style={{ width: 10 }} style={{ background: '#ECECEC', padding: '40px' }}>

         

        <Form layout={formLayout}>
          

          <FormItem 
            label="Nombre:" 
            {...formItemLayout}
          >
            <Input placeholder="Ingresa tu Nombre" />
          </FormItem>
          
        
          <FormItem
            label="Apellido Paterno"
            {...formItemLayout}
          >

          <Input placeholder="Ingresa tu apellido Paterno" />
          </FormItem>
          <FormItem
            label="Apellido Materno"
            {...formItemLayout}
          >
          <Input placeholder="Ingresa tu apellido Materno" />
          </FormItem>

          <Edad/> 

          <FormItem
            label="Field D"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>  </Card>
      </div>  </div> 
             
    );
  }
}

export default Formu1;