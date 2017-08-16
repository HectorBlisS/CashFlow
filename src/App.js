import React, { Component } from 'react';
//import logo from './logo.svg';
import Routes from './Routes';
import './App.css';
import {Link, NavLink} from 'react-router-dom';



class App extends Component {

    
    
  render() {
    return (
      <div className="App">
       <NavLink to="/login">
           <h1>
               Sustituyeme por el nav
           </h1>
       </NavLink>
       <NavLink to="/">
           <h1>
                Volver         
            </h1>
       </NavLink>
       
        <Routes/>
      </div>
    );
  }
}

export default App;
