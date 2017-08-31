import React, {Component} from 'react';
import { Form, Input, Button, Radio, InputNumber,Card } from 'antd';
import Nombre from './Nombre';
import Edad from './Edad';
import Sexo from './Sexo';
import Modal from './Modal';
import Datos from './Datos';
import './Form.css';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;




class Formu1 extends React.Component {



  constructor() {
    super();

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






      <div>
        <Card style={{ width: 10 }} style={{ background: '#ECECEC', padding: '50px', justifyContent: 'center' }}>

         <Form >

       <div>





          <FormItem
          {...formItemLayout}
          label="Profesión:">
          <Input placeholder="Profesión" />
          </FormItem>


          <FormItem
          {...formItemLayout}
          label="Sueldo:">
          <Input placeholder="Sueldo" />
          </FormItem>

          <FormItem
          {...formItemLayout}
          label="Interés:">
          <Input placeholder="Interéses" />
          </FormItem>



          <FormItem
          {...formItemLayout}
          label="Negocios:">
          <Input placeholder="Negocios" />


          </FormItem>



          <FormItem {...formItemLayout}
          label="Edad:"
          >
          <InputNumber placeholder="Tu edad" />

          </FormItem>

    <FormItem {...formItemLayout}
                    label="Número de hijos:"
                    >
                    <InputNumber placeholder="Hijos" />

                  </FormItem>

                  <FormItem
                  {...formItemLayout}
                    label="Gastos por hijo:">
                  <Input placeholder="Gastos por hijo" />
                  </FormItem>



                            <FormItem
                            {...formItemLayout}
                            label="Total de gastos:">
                            <Input placeholder="Total de gastos" />


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
        <Modal/>
          </FormItem>
  </div>
</Form>
      </Card>

</div>











    );
  }
}

export default Formu1;
