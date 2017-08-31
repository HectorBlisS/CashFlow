import React, {Component} from 'react';
import Datos from './Datos';
import firebase from '../../firebase';
import toastr from 'toastr';

class DatosPage extends Component{
     
    guardarDato = (dato) => {
    
    const rama = firebase.database().ref('datos');
        
    rama.push(dato)
        .then(r=>toastr.success("Seguardó tu ingreso con éxito"))
        .catch(e=>toastr.error('Falló, repite', e));

    };
    
    render(){
      return(
        <div>
            <Datos
            guardarDato={this.guardarDato} />
        </div>
      );
    }
  }

  export default DatosPage;
