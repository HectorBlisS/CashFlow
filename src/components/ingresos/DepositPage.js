import React, {Component} from 'react';
import {Row, Col} from 'antd';
import DepositLista from './DepositLista';
import Navegacion from '../principal/Siguiente'

class DepositPage extends Component{
    render(){

        const rowStyle = {
            boxSizing: "border-box",
            padding: "0 3%"
        };

        return(
            <div>
                <Row>
                    <Col xs={24} sm={24} md={4} lg={4} xl={4} style={rowStyle}>

                    <section > <Navegacion/> </section>
                    </Col>
                    <Col xs={24} sm={24} md={20} lg={20} xl={20} style={rowStyle}>

                    <div > <DepositLista/>  </div>
                    </Col>
                </Row>

            </div>
        );

    }
}
export default DepositPage;