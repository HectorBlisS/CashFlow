import React from 'react';
import '../../App.css' ;
import './princi.css';
import Routes from '../../Routes';
import {Link, NavLink} from 'react-router-dom';

import {  Menu} from 'antd';
import firebase from '../../firebase';

class NavP extends React.Component {
    render (){
        return (
<div>
<div className = "navp">
  <NavLink to="/"> <img src={require ('./imagen/logo.png')}
      className="logo" />   </NavLink>


        </div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['4']}
        style={{ lineHeight: '70px' }}
      >

          <Menu.Item key="4"> <NavLink to="/loginpage">   Entrar   </NavLink> </Menu.Item>
          <Menu.Item key="3"> <NavLink to="/Glosario"> Glosario </NavLink> </Menu.Item>
    <Menu.Item key="2"> <NavLink to="/Perfil">  Tu perfil   </NavLink> </Menu.Item>
          <Menu.Item key="1"> <NavLink to="/HomeMeta">  Tus finanzas  </NavLink> </Menu.Item>







      </Menu>

</div>

        );
    }
}
export default NavP;
