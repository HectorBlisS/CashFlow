import React from 'react';
import { Progress } from 'antd';

class Meta extends React.Component {
    render (){
        return (
  <div className="App-flex">
      <div style={{display:'block'}}>
	      <h3> Tu meta prodrías completarla en : </h3>
	      <Progress type="circle" percent={75} format={percent => `${percent} Años`} />
	      <Progress type="circle" percent={100} format={() => 'Done'} />
      </div>

  </div>

);
}
}

export default Meta;
