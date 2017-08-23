import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';
import { SocialIcon } from 'react-social-icons';



class LoginForm extends Component{
    state = {
        usuario:{
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {usuario} = this.state;
        const {userPassLogin} = this.props;
        userPassLogin(usuario.email, usuario.password);
      }

    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let usuario = this.state.usuario;
        usuario[nombre] = valor;
        this.setState({usuario});
    }
      render() {
        const center = {
          display:"flex",
          justifyContent:"center",
            alignItems:"center",
               widht:"100%",
                height:"80vh",

            };


          const {usuario} = this.state;
          const {socialLogin, googleLogin} = this.props;

            return (
              <div style={center}>
                  <form onSubmit={this.handleSubmit} className="login-form" >
                      <div style={{textAlign:"center"}}>
                          <h3>Logearse con</h3>
                          <SocialIcon className="icon" url="http://facebook.com" onClick={socialLogin} />
                          <SocialIcon className="icon" url="http://twitter.com" />
                          <SocialIcon className="icon" url="http://google.com" onClick={googleLogin} />
                          <p>o</p>
                      </div>

                      <label htmlFor="email">Nombres</label>
                      <input value={usuario.correo} type="text" id="email" name="email" placeholder="Nombre" onChange={this.handleChange}/>

                      <label htmlFor="pass">Apellido</label>
                      <input value={usuario.password} type="password" id="pass " name="password" placeholder="Contraseña" onChange={this.handleChange}/>


                      <input type="submit" value="Registarse"/>

                  </form>

          </div>

    );
  }
}


export default LoginForm;
