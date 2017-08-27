import React, {Component} from 'react';
import GraficaGastos from './GraficaGastos';
import TablaGastos from './TablaGastos'
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import firebase from '../../firebase'

class GastosPage extends Component{
    state = {
        userId: '',
        gasto:{
            descripcion: '',
            precio: 0.0,
            fecha: '',
            categoria: '',
            tipoPago: ''
        },
        listaGastos: []
    }

    componentWillMount (){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userId:user.uid});
            } else {
                // No user is signed in.
                console.error("No hay usuario activo");
            }
        });
        this.recuperarGastos();
    }
    recuperarGastos = () => {
        firebase.database().ref('/' + this.state.userId + 'gastos' )
            .once('value')
            .then( (r) =>  {
                const {listaGastos} = this.state;
                for (let key in r.val() ){
                    listaGastos.push(r.val()[key]);
                }
                this.setState({listaGastos});

                //console.log(this.state.listaGastos[0].descripcion);
        });
    }
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
                <TablaGastos datos={this.state.listaGastos} />
                <NavLink to="/gastos/addGasto">
                    <Button type="primary" icon="plus" style={{margin:"10px"}} > Agregar</Button>
                </NavLink>
            </div>
        );
    }
}

export default GastosPage;
