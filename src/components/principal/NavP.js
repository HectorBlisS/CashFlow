import React from 'react';
import Routes from '../../Routes';
import {Link, NavLink} from 'react-router-dom';
import '../../App.css' ;
import './princi.css';



import {  Menu} from 'antd';

class Navp extends React.Component {
    render (){
        return (
<div>
<div>
  <NavLink to="/"> <img src={require ('./imagen/logo.jpg')}
      className="logo" />   </NavLink>


        </div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '70px' }}
      >

    <Menu.Item key="1"> <NavLink to="/login">   Entrar   </NavLink> </Menu.Item>
          <Menu.Item key="2">Glosario</Menu.Item>
          <Menu.Item key="3"> <NavLink to="/HomeMeta">  Tu perfil   </NavLink> </Menu.Item>






      </Menu>

</div>

        );
    }
}
export default Navp;
