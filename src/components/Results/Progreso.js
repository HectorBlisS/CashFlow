import React from 'react';
import { Progress } from 'antd';
import './Progre.css';



class Progreso extends React.Component {



    render (){
        return (
          <div className= "pro">


            <div  >
              <h2>El progreso de tu meta es: </h2>

            </div>
              <Progress percent={30} />
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
              <Progress percent={50} showInfo={false} />
            </div>



);
}
}
export default Progreso;
