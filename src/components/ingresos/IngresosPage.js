import React, {Component} from 'react';
import FormularioI from '../form/FormularioI';
import firebase from '../../firebase';
import toastr from 'toastr'

class IngresosPage extends Component{
     
    guardarIngreso = (ingreso) => {
    
    const rama = firebase.database().ref('ingresos');
        
    rama.push(ingreso)
        .then(r=>toastr.success("Seguardó tu ingreso con éxito"))
        .catch(e=>toastr.error('Falló, repite', e));

    };
    
    render(){
      return(
        <div>
            <FormularioI 
            guardarIngreso={this.guardarIngreso} />
        </div>
      );
    }
  }

  export default IngresosPage;
