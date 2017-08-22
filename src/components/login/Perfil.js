import React, {Component} from 'react';
import { Avatar } from 'antd';
import firebase from '../../firebase';
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
        this.props.history.push('/login');
    }
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
            </div>
            
            
        );
    }
}

export default Perfil;