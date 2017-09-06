import React, {Component} from 'react';
import Meta from './Meta';
import Navegacion from '../principal/Siguiente'

class MetaPage extends Component{
    render(){
        return(
            <div >
            <section  style={{ width:'245px' ,  float:'left' }} > <Navegacion/> </section>
                <div style={{ width:'75%' ,  float:'left',   }} > <Meta/>  </div>

            </div>
        );

    }
}
export default MetaPage;
