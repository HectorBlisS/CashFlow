import { Card, Col, Row } from 'antd';
import React from 'react';


class NavP extends React.Component {



    render (){
        return (

  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={20}>
      <Col span={8}>
        <Card title="Activos" bordered={false}>Pagarés a cobrar $ 300,00 Deudas Efectivo $ 200,00 Dinero en el banco $ 2.500,00  </Card>
      </Col>
      <Col span={8}>
        <Card title="Pasivos" bordered={false}>Automóvil $ 7.000,00 Local $ 50.000,00 Total Activo $ 60.000,00 Total Pasivo $ 20.000,00 $ 20.000,00</Card>
      </Col>

    </Row>
  </div>



);
}
}
export default NavP;
