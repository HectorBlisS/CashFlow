import React ,{Component} from 'react';
import SignUpForm from './SignUpForm';
import firebase from '../../firebase';
import toastr from 'toastr';


class SignUpPage extends Component{
    signInUserPass = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            toastr.error(errorCode + errorMessage);
        });
    }

    render(){
        return(
          <div>
            <SignUpForm signInUserPass={this.signInUserPass} />
          </div>
        );
    }
}

export default SignUpPage;