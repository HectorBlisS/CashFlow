import React, {Component} from 'react';



class LoginPage extends Component{  
    
    changeRoute = () => {
        this.props.history.push("/");
    }
    
    render(){
        return(
            <div>
                <h1>Soy el login</h1>
                <button
                  onClick={this.changeRoute}
                  >
                   Volver
                 </button>
            </div>
            
            
        
        );
    }
}

export default LoginPage;