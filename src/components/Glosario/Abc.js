import React, {Component} from 'react';
import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;

class Abc extends React.Component {

    render() {
    return (

  <div>
    

        
<div className="Abc">  </div>
<div className="ant-btn-primary">  </div>
<div className="ant-btn-primary:hover"> </div>
<div className="ant-select-auto-complete.ant-select ant-input"> </div>
<div className="ant-select-auto-complete.ant-select ant-input"> </div>

<div className="ant-input-affix-wrapper:hover ant-input:not(.ant-input-disabled)"></div>

    
    
    
    <ButtonGroup>
      <Button >L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary">L</Button>
      <Button>M</Button>
      <Button>M</Button>
      <Button type="dashed">R</Button>
    </ButtonGroup>

    

    
  </div>
 
          
    );
  }
}

  


export default Abc;
