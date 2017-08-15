import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';

import './HomePage.css';


class HomePage extends Component{
    
    state={
        hola:"hola",
        edad:1,
        sexo:"alot"
    }
    
    changeName = () => {
        this.setState({hola:"kiubo?"})
    }
    
    render(){
        const {hola} = this.state;
        return(
            <h1 className="fondo">
                Soy la home Page {hola}

                <RaisedButton
                   onClick={this.changeName}
                    label="Pachurrame"
                />
            </h1>
        );
    }
}

export default HomePage;