import React, {Component} from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;


class Sexo extends React.Component {
  state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>Femenino</Radio>
        <Radio value= {2}>Masculino</Radio>
        
      </RadioGroup>
      
    );
  }
}

export default Sexo;