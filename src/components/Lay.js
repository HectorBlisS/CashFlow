import React from 'react';
import '../App.css';
import Carru from '../components/Carru';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Lay extends React.Component {
    render (){
        return (
          <Layout >
    <Header style={{ position: 'fixed', width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Login</Menu.Item>
        <Menu.Item key="2">Contactanos</Menu.Item>
        <Menu.Item key="3">Glosario</Menu.Item>
      </Menu>
    </Header>
    <Content className= "fondo"  style={{ padding: '0 50px', marginTop: 64  }}>

    {/*  <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    */}

  <div style={{ background: '#91869C;', padding: 24, minHeight: 380 }}> <Carru/></div>


    </Content>

  <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>


        );
    }
}
export default Lay;
