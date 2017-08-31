import React, {Component} from 'react';
import {Input} from 'antd';

class Registro extends Component{
    render(){
        return(
            <div>

              <p></p>
              <input type="text" label="Nombre"/>

              <p></p>
              <input type="text" label="Apellidos"/>
                  <p></p>


                <input type="text" label="Correo"/>
                <p></p>
                <input type="text" label="Contraseña"/>


            </div>
        );
    }
}

export default Registro;
