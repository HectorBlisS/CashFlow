import React, {Component} from 'react';
import { InputNumber } from 'antd';

class Edad extends React.Component {

    render(){
        
    


function onChange(value) {
  console.log('changed', value);
}


return(

  <div>
   <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />

    
  </div>


);
      }
    }


export default Edad;





