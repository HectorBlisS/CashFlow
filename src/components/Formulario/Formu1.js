import React, {Component} from 'react';
import { Form, Input, Button, Radio, InputNumber,Card } from 'antd';
import Nombre from './Nombre';
import Image from './Image';
import Edad from './Edad';
import Sexo from './Sexo';
import Iavatar from './Iavatar';
import './Form.css';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

    


class Formu1 extends React.Component {


  constructor() {   
    super();
    /*this.state = {
      formLayout: 'horizontal',
    };*/
    this.state = {
      value: 1,
    }
  
    
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }



  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  render() {

     
        const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            widht:"100%",
            height:"80vh",
            display:"block"
        };

    /*const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 5 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 5, offset: 4 },
    } : null;*/


    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    
    return (

        <div className="Form">    <Nombre/>  <br/><br/>   <br/> <Iavatar/> <br/>
          
         <div className="Cardf"> </div>
         
         
      <div>
        <Card style={{ width: 10 }} style={{ background: '#ECECEC', padding: '40px', justifyContent: 'center' }}>

         <Form >



          <FormItem
          {...formItemLayout} 
          label="Nombre:">
          <Input placeholder="Ingresa tu Nombre" />
            
           

          </FormItem>

          <FormItem
          {...formItemLayout}
          label="Apellido Paterno:">
          <Input placeholder="Ingresa tu Apellido Paterno" />
            
            
          </FormItem>

          <FormItem
          {...formItemLayout}
          label="Apellido Materno:">
          <Input placeholder="Ingresa tu Apellido Materno" />
            
            
          </FormItem>

          <FormItem
          {...formItemLayout}
          label="E-mail">
          <Input placeholder="Ingresa E-mail" />
            
            
          </FormItem>

          <FormItem {...formItemLayout}
          label="Edad:"
          >
          <InputNumber placeholder="Ingresa tu edad" />
            
          </FormItem>

          <FormItem
          wrapperCol={{sm:{offset:6}}}>

            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>Femenino</Radio>
              <Radio value= {2}>Masculino</Radio>
              
            </RadioGroup>

            
          </FormItem>

          <FormItem 
          wrapperCol={{sm:{offset:10}}}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>


        {/*<Form layout={formLayout} >
          

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

          <Edad/> <br/>
          

          <FormItem
            label="Field D"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <Sexo/> <br/> <br/>

          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form> */} </Card>
      </div>  </div> 
             
    );
  }
}

export default Formu1;