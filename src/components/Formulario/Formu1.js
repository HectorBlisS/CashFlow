import React, {Component} from 'react';
import { Form, Input, Button, Radio, InputNumber,Card } from 'antd';
import Nombre from './Nombre';
import Image from './Image';
import Edad from './Edad';
import Sexo from './Sexo';
import Iavatar from './Iavatar';
import Datos from './Datos';
import './Form.css';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

    


class Formu1 extends React.Component {


  
  render() {

    


    return (
       <div>    

       <div className="Fondos"> <Nombre/></div> <div> <Datos/> 
        {/* <br/><br/>   <br/> <Iavatar/> <br/>*/}

        <div className="Form">  
           
         <div className="Cardf"> 
         
         
       </div> </div> </div> </div>
    );
  }
}

export default Formu1;

