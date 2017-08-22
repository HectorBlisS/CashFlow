import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';

const FormItem = Form.Item;

class LoginForm extends Component{
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      render() {
        const center = {
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
           widht:"100%",
            height:"80vh"
        };

        const border = {
          border: "1px solid #e9e9e9",
          padding: "42px 20px 50px"
        };
        const { getFieldDecorator } = this.props.form;
          const {socialLogin} = this.props;
        return (
          <div style={center}>

              <Form 
              style={{textAlign:"center"}}
              onSubmit={this.handleSubmit} className="login-form">
               <FormItem>
                   <Button
                      type="primary"
                      onClick={socialLogin}
                      >
                       Inicia con Facebook
                   </Button>
                   <p>o</p>
               </FormItem>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '¡Por favor introduce tu nombre de usuario!' }],
                  })(
                    <Input size="large" prefix={<Icon type="user" style={{ fontSize: 16 }} />} placeholder="Nombre de Usuario" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '¡Por favor introduce tu contraseña!' }],
                  })(
                    <Input size="large" prefix={<Icon type="lock" style={{ fontSize: 16 }} />} type="password" placeholder="Contraseña" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Recuerdame</Checkbox>
                  )}
                  <a className="login-form-forgot" href="">Olvidé mi contraseña</a> <br/>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Entrar
                  </Button><br/>
                  O <a href="">registrate ahora!</a>
                </FormItem>
              </Form>

          </div>

    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;
