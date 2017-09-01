import React, {Component} from 'react';
import { Button } from 'antd';
import { Avatar } from 'antd';
import Formu1 from '../Formulario/Formu1';
import firebase from '../../firebase';
import toastr from 'toastr';
import {Link, NavLink} from 'react-router-dom';
import './Login.css';



    class Perfil extends Component{

        state = {
            photoURL:'',
            displayName:'',
            user:null
        }

        componentWillMount(){

    firebase.auth()
        .onAuthStateChanged(user=> {
        if(user){
            this.setState({
                photoURL:user.photoURL,
                displayName:user.displayName,
                user:user
            });
        }else{
            toastr.error("Debe iniciar sesión");
            this.props.history.push('/loginpage');
        }
    });

        }

        signOut = () => {
            firebase.auth().signOut().then(function() {
                toastr.success("Ha cerrado sesión correctamente");
            }, function(error) {
                toastr.error("No he podido salir");
            });
        }


        render(){
            const {photoURL, displayName,user} = this.state;
            return(
              <div>
                 <nav className="nav">
                     <h1>Bienvenido</h1>
                         {user && <img
                      src={photoURL}
                      />}
                     </nav>

                      <h2  className= "nombre">{displayName}</h2>

                      <div className= "boton">
                      <button  onClick={this.signOut}> Cerrar sesión </button>
</div>


                      <div>
                        <Formu1/>
                    </div>
                  </div>




            );
        }
    }

    export default Perfil;
