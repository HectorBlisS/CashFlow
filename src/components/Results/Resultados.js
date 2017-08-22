import { Progress } from 'antd';
import React from 'react';



class Resultado extends React.Component {
    render (){
        return (

          <div>

            <table  style={{ height: '200px', borderRight: 0 , width: '400px'}} >
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />


    </table>
  </div>




        );
    }
}
export default Resultado;
