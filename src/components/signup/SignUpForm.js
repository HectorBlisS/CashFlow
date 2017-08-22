import React, {Component} from 'react';
import './SignUp.css';
import toastr from 'toastr';

class SignUpForm extends Component{
    state = {
        usuario:{
            firstname: '',
            lastname: ''
        }
    }

    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let usuario = this.state.usuario;
        usuario[nombre] = valor;
        this.setState({usuario});
    }

    showUserPass = (event) => {
        event.preventDefault();
        toastr.success(this.state.usuario.firstname);
    }

    render(){
        const {usuario} = this.state;
        return(
            <div className="center">
                <form onSubmit={this.showUserPass} className="login-form">
                    <label htmlFor="fname">Nombres</label>
                    <input value={usuario.fname} type="text" id="fname" name="firstname" placeholder="Nombre" onChange={this.handleChange}/>

                    <label htmlFor="lname">Apellido</label>
                    <input value={usuario.lname} type="text" id="lname" name="lastname" placeholder="Apellido" onChange={this.handleChange}/>


                    <input type="submit" value="Registarse"/>

                </form>
            </div>
    );
    }
}

export default SignUpForm;