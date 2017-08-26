import React, {Component} from 'react';
import InputItem from './InputItem';
import DropDownList from './DropDownList';
import '../login/Login.css';
import firebase from '../../firebase';
import toastr from 'toastr';




class AddGasto extends Component{
    /*shouldComponentUpdate(){
        var useragent = navigator.userAgent||navigator.vendor||window.opera;
        //Creamos una variable para detectar los móviles
        var ismobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|zh-cn|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(useragent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(useragent.substr(0,4));

        //Los buscamos
        if(ismobile) {
            console.log("Dispositivo Móvil Detectado");

        }else{
            console.log("Dispositivo Móvil No Detectado");

        }
    }*/
    state = {
        userId: '',
        gasto:{
            descripcion: '',
            precio: 0.0,
            fecha: '',
            categoria: '',
            tipoPago: ''
        },
        categoriaLista: [],
        tiposPagoLista: []
    }

    recuperarCategorias = () => {

        firebase.database().ref('categorias')
            .once('value')
            .then(
                (r) =>{
                    console.log(r.val());
                    const {categoriaLista} = this.state;
                    for (let key in r.val()){
                        console.log(r.val()[key]);
                        categoriaLista.push(r.val()[key]);
                        console.log(categoriaLista);
                    }
                    let gasto = this.state.gasto;
                    gasto['categoria'] = categoriaLista[0].value;
                    this.setState({categoriaLista, gasto});
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );

    }

    recuperarTiposPago = () => {

        firebase.database().ref('tiposPago')
            .once('value')
            .then(
                (r) =>{
                    console.log(r.val());
                    const {tiposPagoLista} = this.state;
                    for (let key in r.val()){
                        console.log(r.val()[key]);
                        tiposPagoLista.push(r.val()[key]);
                        console.log(tiposPagoLista);
                    }
                    let gasto = this.state.gasto;
                    gasto['tipoPago'] = tiposPagoLista[0].value;
                    this.setState({tiposPagoLista,gasto});
                }
            ).catch(
            (error) => {
                console.log(error);
            }
        );

    }

    componentWillMount(){
        this.recuperarCategorias();
        this.recuperarTiposPago();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userId:user.uid});
            } else {
                // No user is signed in.
                console.error("No hay usuario activo");
            }
        });
    }


    componentDidMount (){

    }


    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let gasto = this.state.gasto;
        gasto[nombre] = valor;
        this.setState({gasto});

    }

    handleSubmit = (e) => {
        e.preventDefault();
        //const tipoPago = this.refs.drop1;
        console.log("Referencia" + this.refs );

        console.log(this.state.gasto.precio.length);

    }

    validarCampos = (e) => {

        let bandera = true;
        let {gasto} = this.state;

        if(gasto['descripcion'] === ''){
            bandera = false;
            toastr.error('Debe poner una descripción');
        }if (gasto['fecha'] === ''){
            bandera = false;
            toastr.error('Debe poner una fecha');
        }if (gasto['precio'] <= 0 || this.state.gasto.precio.length === 0){
            bandera = false;
            toastr.error('Debe poner un precio');
            console.log(this.state.gasto.precio);
        }

        return bandera;
    }

    guardarIngreso = (gasto) => {

        const rama = firebase.database().ref(this.state.userId + '/gastos');

        rama.push(gasto)
            .then(r=>{
                toastr.success("Se guardó tu gasto con éxito");
                this.props.history.push('/gastos');
            }).catch(e=>{
                toastr.error('Falló, repite', e);
            });

    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.validarCampos()){
            return;
        }
        this.guardarIngreso(this.state.gasto);
        console.log(this.state);
    }
    render(){
        const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"100%",

        };

        const {categoriaLista, tiposPagoLista, gasto} = this.state;




        return(
            <div style={center}>
                <form style={{padding:"3rem", width:"95%" }} onSubmit={this.handleSubmit}>

                    <InputItem value={gasto.precio} tipo="number" nombre="precio" handleChange={this.handleChange}  etiqueta="Precio"/>

                    <InputItem tipo="date" nombre="fecha" handleChange={this.handleChange}  etiqueta="Fecha"/>
                    <InputItem tipo="text" nombre="descripcion" handleChange={this.handleChange}  etiqueta="Descripción"/>
                    <DropDownList ref="drop1" data={categoriaLista} nombre="categoria" handleChange={this.handleChange} etiqueta="Categoria"/>
                    <DropDownList ref="drop2" data={tiposPagoLista} nombre="tipoPago" handleChange={this.handleChange} etiqueta="Tipo de pago"/>
                    <input type="submit" label="Submit"/>
                </form>

            </div>
        );
    }
}

export default AddGasto;
