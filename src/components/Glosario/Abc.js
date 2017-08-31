import React, {Component} from 'react';
import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;

class Abc extends React.Component {

    render() {
    return (

  <div>



<div className="abc">
<div className="ant-btn-primary">  </div>
<div className="ant-btn-primary:hover"> </div>
<div className="ant-select-auto-complete.ant-select ant-input"> </div>
<div className="ant-select-auto-complete.ant-select ant-input"> </div>

<div className="ant-input-affix-wrapper:hover ant-input:not(.ant-input-disabled)"></div>




    <ButtonGroup>
      <Button >A</Button>

      <Button >B</Button>
            <Button >C</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary">D</Button>
      <Button>F</Button>
      <Button>G</Button>
      <Button type="dashed">H</Button>
    </ButtonGroup>


</div>

  </div>


    );
  }
}




export default Abc;
