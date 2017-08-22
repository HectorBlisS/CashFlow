import React from 'react';
import '../../App.css' ;
import './princi.css';
import Resultados from '../Results/Resultados';
import Meta from '../Results/Meta';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider , Footer} = Layout;

class Siguiente extends React.Component {
    render (){
        return (
  <Layout>
    <Header>
      <div> <img src={require ('./imagen/logo.jpg')}
       className="logodos" /></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Glosario</Menu.Item>
        <Menu.Item key="2">Cerrar sesión</Menu.Item>

      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#8d8993' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />Registro</span>}>
            <Menu.Item key="1">Ingresos</Menu.Item>
          <Menu.Item key="2">Gastos</Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="calculator" />Flujo</span>}>
            <Menu.Item key="5">Activos</Menu.Item>
            <Menu.Item key="6">Pasivos</Menu.Item>

          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />Resultados</span>}>
            <Menu.Item key="9">Progreso</Menu.Item>
            <Menu.Item key="10">Meta</Menu.Item>

          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>

<div>
<h2  align= "center"> Tu progreso : </h2>
   <Meta/> </div>



        </Content>



        <Footer style={{ textAlign: 'center' }}>
        Cash Flow ©2017 Created by Fixter
        </Footer>


      </Layout>
    </Layout>
  </Layout>


);
}
}

export default Siguiente;
