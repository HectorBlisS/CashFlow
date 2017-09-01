import React, {Component} from 'react';
import Activos from './Activos';
import Navegacion from '../principal/Siguiente'

class ActivPage extends Component{
    render(){
        return(
            <div>
            <section  style={{ width:'245px' ,  float:'left' }} > <Navegacion/> </section>
                <div style={{ width:'75%' ,  float:'left',   }} > <Activos/>  </div>

            </div>
        );

    }
}
export default ActivPage;
