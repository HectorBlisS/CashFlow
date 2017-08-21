import React, {Component} from 'react';
import { Form, InputNumber , Button, Radio, Tooltip  } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioGroup2 = Radio.Group;

class FotmularioI extends Component {

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
    return (
      <div>
        <h1>Ingresos</h1>
        <p>A continuacón le pedimos nos brinde un poco de información necesaria para llevar a cabo sus cálculos.
          La información brindada debe ser lo más cercaca a las cifras exactas.</p>

          <FormItem
            label="1. Saldo mensual neto"
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
            label="2.1 ¿A cuánto asciende su dividendo?">
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
            label="3.1 ¿Cuánto recibe por ellos?">
          <InputNumber
              defaultValue={0}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
          />
          </FormItem>  

          <FormItem >
          <Button type="primary">Volver</Button>
            <Button type="primary">Continuar</Button>
          </FormItem>
      </div>
    );
  }
}


export default FotmularioI;
