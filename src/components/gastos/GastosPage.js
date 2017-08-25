import React, {Component} from 'react';
import GraficaGastos from './GraficaGastos';
import TablaGastos from './TablaGastos'
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';

class GastosPage extends Component{


    render(){
        const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            widht:"100%",
            height:"80vh",
            display:"block",
            textAlign: "center"
        };

        return(
            <div style={center}>
                <GraficaGastos/>
                <TablaGastos />
                <NavLink to="/gastos/addGasto">
                    <Button type="primary" icon="plus" style={{margin:"10px"}} > Agregar</Button>
                </NavLink>
            </div>
        );
    }
}

export default GastosPage;
