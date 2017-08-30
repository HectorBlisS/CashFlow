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
        var mesesNombres = [
            'Enero','Febrero','Marzo','Abril', 'Mayo', 'Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'
        ];
        var date = new Date();
        var mesTemp = date.getMonth() + 1;
        var nombreMes = mesesNombres[mesTemp];
        var dateRam = nombreMes + ' ' + date.getFullYear();
        this.state = {
            userId: '',
            listaGastos: [],
            dateRama: dateRam,
            categoriaLista: [],
            dataGraficaGastos: []
        };
        this.recuperarCategorias();


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
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

    generarDatosGrafica = () => {
        var claveValor = [];
        this.state.categoriaLista.forEach( (categoria) => {
            var cantidad = 0.0;
            this.state.listaGastos.forEach((gasto) => {
                if( categoria === gasto.categoria){
                    cantidad += parseFloat(gasto.precio);
                }
            });
            claveValor.push({categoria: categoria, cantidad: cantidad})
        });
        console.log(claveValor);
        var dataGraficaGastos = [];



        claveValor.forEach( (cv) => {
            var number = Math.floor(Math.random() * 16777215);
            var colorPrimary = this.generarColorPrimario(number);
            var colorSecondary = this.generarColorSecundario(number);
            dataGraficaGastos.push({
                value: cv.cantidad,
                color:"#" + colorPrimary,
                highlight: "#" + colorPrimary,
                label: cv.categoria
            });
        });
        let dataGraficaGasto = this.state.dataGraficaGastos;
        dataGraficaGasto = dataGraficaGastos;
        this.setState({dataGraficaGastos:dataGraficaGasto});
    }

    generarColorPrimario = (number) => {
        var hexString = this.decimalToHexadecimal(number);
        return hexString;
    }

    generarColorSecundario = (number) => {
        number -= parseInt(number) - 81414;
        var hexString = this.decimalToHexadecimal(number);
        return hexString;
    }

    decimalToHexadecimal = (number) =>{
        var hexString = number.toString(16);
        hexString = hexString.toUpperCase();
        return hexString;
    }

    recuperarCategorias = () => {

        firebase.database().ref('categorias')
            .once('value')
            .then(
                (r) => {
                    const {categoriaLista} = this.state;
                    for (let key in r.val()) {
                        categoriaLista.push(r.val()[key].value);
                    }
                    this.setState({categoriaLista});
                }
            ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    recuperarGastos = () => {
        firebase.database().ref( 'usuarios/' + this.state.userId + '/gastos/' + this.state.dateRama )
            .once('value')
            .then( (r) =>  {
                const {listaGastos} = this.state;
                for (let key in r.val() ){
                    listaGastos.push(r.val()[key]);
                }
                this.setState({listaGastos});
                this.generarDatosGrafica();
                //console.log(this.state.listaGastos[0].descripcion);
        }).catch( (e) => {
            toast.error("No lo pude cargar" );
            toast.error(e.message);
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

        const {dataGraficaGastos} = this.state;

        return(
            <div>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div style={padre}>
                            <div style={hijo}>
                                <GraficaGastos dataGraficaGastos={dataGraficaGastos}/>
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
