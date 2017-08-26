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

    twitterLogin = () =>{
        var provider = new firebase.auth.TwitterAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            var user = result.user;

            toastr.success("Bienvenido");
            this.props.history.push('/perfil');
            
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            toastr.error("Algo salió mal" + errorMessage);
          });
    }

    googleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;

            toastr.success("Bienvenido");
            this.props.history.push('/perfil');
        }).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            toastr.error("Algo salió mal" + errorMessage);
        
        });
    }

    userPassLogin = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) =>{
                toastr.success("Bienvenido");
                this.props.history.push('/perfil');
        }
        ).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            toastr.error("Something wrong" + errorMessage);
        });
    }

  render(){
    return(
        <LoginForm
            socialLogin={this.socialLogin}
            googleLogin={this.googleLogin}
            userPassLogin={this.userPassLogin}
            twitterLogin={this.twitterLogin}
        />
    );  
  }
}

export default LoginPage;
