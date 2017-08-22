import React from 'react';
import '../../App.css' ;
import './princi.css';
import Carru from './Carru';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Lay extends React.Component {
    render (){
        return (
          <Layout className="layout">
    <Header>
      <div> <img src={require ('./imagen/logo.jpg')}
       className="logo" /></div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '70px' }}
      >
        <Menu.Item key="1">Login</Menu.Item>
        <Menu.Item key="2">Glosario</Menu.Item>
      </Menu>
    </Header>

      {/* contenido uno */}
    <Content   style={{ padding: '20px 50px' }}>


      <div style={{ background: '#fff', padding:80, minHeight: 300 }}>Content</div>


    {/* <video id="Cash" height="400" width="400" autoplay="loop">
           <source id="Cash"  src="./imagen/cash.mp4" type='Cash/mp4'/>
       </video>*/}

  <div > <Carru/> </div>

   <div>

<button href="./principal/Siguiente.js"> hola</button>
    </div>
    </Content>






    <Footer style={{ textAlign: 'center' }}>
    Cash Flow ©2017 Created by Fixter
    </Footer>
  </Layout>

        );
    }
}
export default Lay;
