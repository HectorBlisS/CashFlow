import React, {Component} from 'react';
import { Form, InputNumber , Button, Radio, Tooltip, Input  } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioGroup2 = Radio.Group;

class FotmularioI extends Component {
  
/*  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

   onChange = (value) => {
    console.log('changed', value);
  }

  state = {
    value: 1,
  }

  onChangeRadio = (e) => {
    console.log('radio marcado', e.target.value);
    this.setState({

      value: e.target.value,
    });
  }

  onChangeRadio2 = (f) => {
    console.log('radio marcado', f.target.value);
    this.setState({

      value: f.target.value,
    });
  }

  render() {

    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;

    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null; 


    return (
      <div>
         <Form layout={formLayout}>
           
        <h1>Ingresos</h1>
        <p>A continuacón le pedimos nos brinde un poco de información necesaria para llevar a cabo sus cálculos.
          La información brindada debe ser lo más cercaca a las cifras exactas.</p>

          <FormItem
            label="1. Saldo mensual neto"
            {...formItemLayout}
          >
          <Tooltip placement="right" title={"Salario mensual"}>
          <a href="#">?</a>
          </Tooltip>
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem>
          <FormItem
            label="2. ¿Es usted accionario o inversionista de alguna empresa?"
            {...formItemLayout}
            >
          <Tooltip placement="right" title={"Tiene inversiones o acciones en alguna empresa"}>
          <a href="#">?</a>
          </Tooltip>

          <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
            <Radio value={1}>Sí</Radio>
            <Radio value={2}>No</Radio>
            </RadioGroup>
            </FormItem>    

            <FormItem
            label="2.1 ¿A cuánto asciende su dividendo?"  {...formItemLayout}>
           
            <Tooltip placement="right" title={"Puede consutar el glosario o presionar aquí"}>
          <a href="#">?</a>
          </Tooltip>
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem> 

          <FormItem
            label="3. ¿Tiene usted bienes inmuebles o negocios de los cuales reciba algún ingreso?"
            {...formItemLayout}
          >
          <Tooltip placement="right" title={"Rentas / negocios pequeños / renta de locales / etc.."}>
          <a href="#">?</a>
          </Tooltip>

          <RadioGroup2 onChange={this.onChangeRadio2} value={this.state.value}>
            <Radio value={1}>Sí</Radio>
            <Radio value={2}>No</Radio>
            </RadioGroup2>
            </FormItem>    

            <FormItem
            label="3.1 ¿Cuánto recibe por ellos?" {...formItemLayout}>
            
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem>  

          <FormItem 
          {...buttonItemLayout}>
          <Button type="primary">Volver</Button>
            <Button type="primary">Continuar</Button>
          </FormItem>
          </Form>
      </div>
    );
  }*/

  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 9},
      wrapperCol: { span: 7 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div>
        <Form layout={formLayout}>


          <h1>Ingresos</h1>
          <p>A continuacón le pedimos nos brinde un poco de información necesaria para llevar a cabo sus cálculos.
          La información brindada debe ser lo más cercaca a las cifras exactas.</p>

          <br></br>         
          
          <FormItem
            label="1. Saldo mensual neto"
            {...formItemLayout}
          >
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem>
          <FormItem
            label="2. ¿Es usted accionario o inversionista de alguna empresa?"
            {...formItemLayout}
          >
          <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
            <Radio value={1}>Sí</Radio>
            <Radio value={2}>No</Radio>
            </RadioGroup>

          </FormItem>
          
          <FormItem
            label="2.1 ¿A cuánto asciende su dividendo?"
            {...formItemLayout}
          >
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem>

          <FormItem
            label="3. ¿Tiene usted bienes inmuebles o negocios de los cuales reciba algún ingreso?"
            {...formItemLayout}
          >
          <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
            <Radio value={1}>Sí</Radio>
            <Radio value={2}>No</Radio>
            </RadioGroup>

          </FormItem>

          <FormItem
            label="3.1 ¿Cuánto recibe por ellos?"
            {...formItemLayout}
          >
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem>

          <FormItem {...buttonItemLayout}>
          <Button type="primary">Volver</Button>
            <Button type="primary">Continuar</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FotmularioI;