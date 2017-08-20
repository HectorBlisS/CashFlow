import React, {Component} from 'react';
//import {RaisedButton} from 'material-ui';
//import ExampleCard from './ExampleCard';
//import FontIcon from 'material-ui/FontIcon';
import Ejemplo from './Ejemplo';


import './HomePage.css';


class HomePage extends Component{

    state={
        hola:"hola",
        edad:1,
        sexo:"alot"
    }

    changeName = () => {
        if (this.state.hola == "hola") {
          this.setState({hola:"kiubo?"})
        } else {
          this.setState({hola:"hola"})
        }


    }

    render(){
        const {hola} = this.state;
        return(
            <div>
             <div className="fondo">

              <h1 >
                  Soy la Home Page {hola}
              </h1>
              <Ejemplo lupe={this.props.history} />

            </div>


          </div>


        );
    }
}

export default HomePage;
