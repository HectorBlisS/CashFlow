import React, { Component } from 'react';
//import logo from './logo.svg';
import Lay from './components/principal/Lay';
import Siguiente from './components/principal/Siguiente';
import Routes from './Routes';

import {Link, NavLink} from 'react-router-dom';



class App extends Component {

  render() {
    return (

      <div>



      <div className="App">
        <NavLink to="/ingresos">
          <h1>
            Probando ingresos, no meter mano >:C
          </h1>
        </NavLink>

        <Routes/>

      </div>
    </div>

    );
  }
}

export default App;
