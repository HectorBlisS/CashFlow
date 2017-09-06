import React from 'react';
import { Progress } from 'antd';
import './Progre.css';



class Progreso extends React.Component {



    render (){
        const inblock = {
        	display: 'block',
	        width: '70%'
        };

        const progressiveStyle = {
        	margin: '10px',
	        height: '30px'
        };
        return (
          <div className= "App-flex">


            <div style={inblock} >
              <h2>El progreso de tu meta es: </h2>


              <Progress percent={30} style={progressiveStyle} />
              <Progress percent={50} status="active" style={progressiveStyle} />
              <Progress percent={70} status="exception" style={progressiveStyle}/>
              <Progress percent={100} style={progressiveStyle}/>
              <Progress percent={50} showInfo={false} style={progressiveStyle}/>
            </div>
          </div>




);
}
}
export default Progreso;
