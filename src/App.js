import React, { Component } from 'react';
import NavP from './components/principal/NavP';
//import Footer from './components/principal/Footer';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom';




class App extends Component {

  render() {
    return (

      <div>

<NavP/>

      <div >

      <div className="App">
        <NavLink to="/ingresos">
          <h1>
           
          </h1> 
        </NavLink>

        <Routes/>
            </div>  </div> 




    </div>


    );
  }
}

export default App;
