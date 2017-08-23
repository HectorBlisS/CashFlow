import React, {Component} from 'react';
import { InputNumber } from 'antd';

class Edad extends React.Component {

    render(){
        
    


function onChange(value) {
  console.log('changed', value);
}


return(
  <InputNumber min={1} max={100} defaultValue={3} size="large" onChange={onChange} />


);
      }
    }


export default Edad;





