import React, {Component} from 'react';
import { Form, InputNumber , Button, Radio, Tooltip, Input  } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioGroup2 = Radio.Group;

class FotmularioI extends Component {
  

    state = {
      formLayout: 'horizontal',
        ingreso:{
            smneto:500,
            dividendo:99,
            bliss:'bliss'
        }
    }
    
    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let ingreso = this.state.ingreso;
        ingreso[nombre] = valor;
        this.setState({ingreso});
        console.log(this.state.ingreso);
//        console.log(e.target.name);
    }
    
    guardar = () => {
    this.props.guardarIngreso(this.state.ingreso)
    }


  render() {
    const { formLayout, ingreso } = this.state;
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
          <input
             name="smneto"
              value={ingreso.smneto}
              onChange={this.handleChange}
          />
          </FormItem>
         
          <FormItem
            label="2.1 ¿A cuánto asciende su dividendo?"
            {...formItemLayout}
          >
          <input
             name="dividendo"
              value={ingreso.dividendo}
              onChange={this.handleChange}
          />
          </FormItem>

          
          <Button type="primary">Volver</Button>
            <Button type="primary"
            onClick={this.guardar}
            >Continuar</Button>

        </Form>
      </div>
    );
  }
}

export default FotmularioI;