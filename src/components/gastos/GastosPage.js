import React, {Component} from 'react';
import GraficaGastos from './GraficaGastos';
import TablaGastos from './TablaGastos'
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import firebase from '../../firebase';
import toast from 'toastr';
import {Row, Col} from 'antd';


class GastosPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            userId: '',
            listaGastos: []
        };


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Este es el usuario: ");
                console.log(user.uid);
                var usuario = user.uid;
                this.setState({userId:usuario});
                this.recuperarGastos();
            } else {
                // No user is signed in.
                console.error("No hay usuario activo");
            }
        });
    }





    recuperarGastos = () => {
        firebase.database().ref( this.state.userId + '/gastos' )
            .once('value')
            .then( (r) =>  {
                const {listaGastos} = this.state;
                for (let key in r.val() ){
                    listaGastos.push(r.val()[key]);
                }
                this.setState({listaGastos});
                console.log(this.state.listaGastos);
                //console.log(this.state.listaGastos[0].descripcion);
        }).catch( (e) => {
            toast.error("No lo pude cargar" );
        });
    }
    render(){
        const padre = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh"
        };

        const hijo = {
            width: "100vw"
        };

        return(
            <div>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div style={padre}>
                            <div style={hijo}>
                                <GraficaGastos/>
                            </div>

                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <TablaGastos datos={this.state.listaGastos} />
                            <NavLink to="/gastos/addGasto" >
                                <Button  style={{margin:"10px"}} type="primary" icon="plus"  > Agregar gasto </Button>
                            </NavLink>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default GastosPage;
