import React, {Component} from 'react';
import { Form, Input, Button, Radio, InputNumber,Card } from 'antd';
import './Form.css';
import firebase from '../../firebase';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Datos extends React.Component {



  state = {
      formLayout: 'horizontal',
        dato:{
            nameu:100,
            apellidop:99,
            bliss:'bliss'
        }
    }
    
    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let dato = this.state.lista;
        dato[nombre] = valor;
        this.setState({dato});
        console.log(this.state.lista);
 //      console.log(e.target.name);
    }
    
    guardar = () => {
    this.props.guardarDato(this.state.lista)
    }



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

     
       
        

    /*const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 5 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 5, offset: 4 },
    } : null;*/

    const { dato } = this.state;
    const formItemLayout = {   
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 14 },
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
          span: 10,
          offset: 1,
        },
      },
    };

    
    return (
        <div className="Form"> 
        <div className="Datos"> 
         
          

         
      <div> 
                
        <Card className="Card"
        
         style={{ width: 10 }} style={{ background: '#ECECEC', padding: '10px', justifyContent: 'center' }}>
 
         <Form >

          <FormItem
          {...formItemLayout} 
          label="Nombre:">
          <Input placeholder="Ingresa tu Nombre" />
          {/*<input
             name="nameu"
               value={dato.nameu}
               onChange={this.handleChange}
          />*/}

          </FormItem>

          <FormItem
          {...formItemLayout}
          label="Apellido Paterno:">
          <Input placeholder="Ingresa tu Apellido Paterno" />
          {/*<input
             name="apellidop"
              value={dato.apellidop}
               onChange={this.handleChange}
          />*/}
            
            
          </FormItem>

          <FormItem
          {...formItemLayout}
          label="Apellido Materno:">
          <Input placeholder="Ingresa tu Apellido Materno" />
            
            
          </FormItem>

          <FormItem
          {...formItemLayout}
          label="E-mail">
          <Input placeholder="Ingresa E-mail" 
          />
            
            
          </FormItem>

          <FormItem {...formItemLayout}
          label="Edad:"
          >
          <InputNumber placeholder="Edad" />
          
          </FormItem>

          <FormItem
          wrapperCol={{sm:{offset:2}}}>

            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>Femenino</Radio>
              <Radio value= {2}>Masculino</Radio>
              
            </RadioGroup>

            
          </FormItem> <br/> <br/> <br/>

          <FormItem 
          wrapperCol={{sm:{offset:24}}}
          flex={{reduceRight:10}}>
          
            <Button  className="Button" type=""onClick={this.guardar}>Submit</Button>
            
            <br/>
         
            
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
      </div>  </div>   </div> 
    );
  }
}

export default Datos;