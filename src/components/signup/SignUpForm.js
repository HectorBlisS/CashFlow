import React, {Component} from 'react';
import './SignUp.css';
import toastr from 'toastr';

class SignUpForm extends Component{
    state = {
        usuario:{
            email: '',
            password: ''
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
        toastr.success(this.state.usuario.email);
        const {signInUserPass} = this.props;
        const {usuario} = this.state;
        signInUserPass(usuario.email, usuario.password);
    }

    render(){
        const {usuario} = this.state;
        return(
            <div className="center">
                <form onSubmit={this.showUserPass} className="signup-form">
                    <label htmlFor="email">Correo</label>
                    <input value={usuario.correo} type="text" id="email" name="email" placeholder="email" onChange={this.handleChange}/>

                    <label htmlFor="pass">Contraseña</label>
                    <input value={usuario.password} type="password" id="pass " name="password" placeholder="Contraseña" onChange={this.handleChange}/>


                    <input type="submit" value="Registarse"/>

                </form>
            </div>
    );
    }
}

export default SignUpForm;
