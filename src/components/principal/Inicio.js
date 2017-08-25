import React, { Component } from 'react';
/*import NavP from './components/principal/NavP';*/
import NavP from './NavP';

import Carru from './Carru';
import Routes from '../../Routes';
import {Link, NavLink} from 'react-router-dom';



class Inicio extends Component {

  render() {
    return (

      <div>

<NavP/>





            <div>
<Carru/>
            </div>




    </div>



    );
  }
}

export default Inicio;
