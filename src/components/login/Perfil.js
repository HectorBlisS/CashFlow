import React, {Component} from 'react';
import { Avatar } from 'antd';
import firebase from '../../firebase';
import './Login.css';
import toastr from 'toastr';

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
            this.props.history.push('/login');
        }
    });

        }

        signOut = () => {
            firebase.auth().signOut().then(function() {
                toastr.success("He salido");
            }, function(error) {
                toastr.error("No he podido salir");
            });
        }


        render(){
            const {photoURL, displayName,user} = this.state;
            return(
                <div>
                   <nav className="nav">
                       <h3>Logo</h3>
                           {user && <img
                        src={photoURL}
                        />}
                       </nav>

                        <h1>{displayName}</h1>
                        <button onClick={this.signOut}>Cerrar Sesión</button>
                    </div>


            );
        }
    }

    export default Perfil;