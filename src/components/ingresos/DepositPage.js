import React, {Component} from 'react';
import DepositLista from './DepositLista';
import Navegacion from '../principal/Siguiente'

class DepositPage extends Component{
    render(){
        return(
            <div>
            <section  style={{ width:'245px' ,  float:'left' }} > <Navegacion/> </section>
                <div style={{ width:'75%' ,  float:'left',   }} > <DepositLista/>  </div>

            </div>
        );

    }
}
export default DepositPage;