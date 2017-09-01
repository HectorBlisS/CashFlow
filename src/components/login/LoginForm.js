import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Login.css';



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
          const {socialLogin, googleLogin, twitterLogin} = this.props;

            return (
              <div style={center}>
                  <form onSubmit={this.handleSubmit} className="login-form" >
                      <div style={{textAlign:"center", color:'white'}}>
                          <h3 style={{color:'white'}}>Inicia con : </h3>
                          <SocialIcon className="icon" network="facebook" onClick={socialLogin} />
                          <SocialIcon className="icon" network="twitter" onClick={twitterLogin}/>
                          <SocialIcon className="icon" network="google" onClick={googleLogin} />
                          <h3 style={{color:'white'}}>o</h3>
                      </div>



                      <label htmlFor="email">Correo</label>
                      <input className="emailLogin" value={usuario.correo} type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>

                      <label htmlFor="pass">Contraseña</label>
                      <input value={usuario.password} type="password" id="pass " name="password" placeholder="Contraseña" onChange={this.handleChange}/>


                      <input type="submit" value="Iniciar sesión" className="aceptarGasto"/>
                      <p>
                         <NavLink style={{color:"white",textDecoration: 'underline'}} to="/signup">
                            <p>
                             Registrarse
                            </p>
                         </NavLink>
                      </p>


                  </form>

          </div>

    );
  }
}


export default LoginForm;
