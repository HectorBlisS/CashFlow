import React from 'react';
import { Progress } from 'antd';

class Meta extends React.Component {
    render (){
        return (
  <div>
    <p> Tu meta prodrías completarla en : </p>

  <Progress type="circle" percent={75} format={percent => `${percent} Años`} />


    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>

);
}
}

export default Meta;
