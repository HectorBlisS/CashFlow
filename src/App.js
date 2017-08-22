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

      <Siguiente/>
      </div>

    );
  }
}

export default App;
