import React, {Component} from 'react';
import {Input} from 'antd';

class Registro extends Component{
    render(){
        return(
            <div>
                <input type="text" label="Correo"/>
                <p></p>
                <input type="text" label="Contraseña"/>
            </div> 
        );
    }
}

export default Registro;