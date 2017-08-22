import React, { Component } from 'react';
//import logo from './logo.svg';
import Routes from './Routes';
import './App.css';
import {Link, NavLink} from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavLink to="/ingresos">
          <h1>
            Probando ingresos, no meter mano >:C
          </h1>
        </NavLink>

        <Routes/>
      </div>
    );
  }
}

export default App;
