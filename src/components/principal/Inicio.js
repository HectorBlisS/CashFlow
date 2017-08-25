import React, { Component } from 'react';
/*import NavP from './components/principal/NavP';*/
import NavP from './NavP';

import Footer from './Footer';
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


<Footer/>

    </div>



    );
  }
}

export default Inicio;
