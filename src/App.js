import React, { Component } from 'react';
import NavP from './components/principal/NavP';
//import Footer from './components/principal/Footer';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom';




class App extends Component {
    render() {
        // const IMAGEN = require(`./img/finances.jpg`);
        // var fondo = {
        //     backgroundImage: `url(${IMAGEN})`,
        //     width: '100vw',
        //     height: '100vh',
        //     backgroundSize: 'cover',
        // };
        return (
            <div>
                <NavP/>
                <div >
                    <div className="App" >
                        <Routes/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
