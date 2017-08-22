import React, {Component} from 'react';
import LoginForm from './LoginForm';
import firebase from '../../firebase';


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
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
        .signInWithPopup(provider)
        .then((result)=>{
            this.props.history.push('/perfil');
        });

    }
    
  render(){
    return(
        <LoginForm
            socialLogin={this.socialLogin}
            googleLogin={this.googleLogin}
        />
    );  
  }
}

export default LoginPage;
