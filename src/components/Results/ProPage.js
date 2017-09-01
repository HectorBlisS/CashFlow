import React, {Component} from 'react';
import Progreso from './Progreso';
import Navegacion from '../principal/Siguiente'

class ProPage extends Component{
    render(){
        return(
            <div>
            <section  style={{ width:'245px' ,  float:'left' }} > <Navegacion/> </section>
                <div style={{ width:'75%' ,  float:'left',   }} > <Progreso/>  </div>

            </div>
        );

    }
}
export default ProPage;
