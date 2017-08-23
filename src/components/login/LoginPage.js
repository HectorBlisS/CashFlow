import React, {Component} from 'react';
import LoginForm from './LoginForm';
import firebase from '../../firebase';
import toastr from 'toastr';

class LoginPage extends Component{
    
    socialLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        
    firebase.auth()
        .signInWithPopup(provider)
        .then((result)=>{
        console.log(result.user);
        this.props.history.push('/perfil');
    });

    }

    googleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            toastr.success("Bienvenido");
            this.props.history.push('/perfil');
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            toastr.error("Algo salió mal" + errorMessage);
            // ...
        });
    }

    userPassLogin = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) =>{
                toastr.success("Bienvenido");
                this.props.history.push('/perfil');
        }
        ).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            toastr.error("Something wrong" + errorMessage);
        });
    }

  render(){
    return(
        <LoginForm
            socialLogin={this.socialLogin}
            googleLogin={this.googleLogin}
            userPassLogin={this.userPassLogin}
        />
    );  
  }
}

export default LoginPage;
