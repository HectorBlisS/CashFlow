import React, {Component} from 'react';
import {Row, Col} from 'antd';
import elvideo  from './principal/imagen/video.mp4';
import Animacion from  './Animacion';
import  '../App.css' ;



class Background extends Component{

          render() {
            return (
                  <div>
                  <div  className = "video">

                <video autoPlay loop muted  style={{ width: "100%", height: "100%" }}>
                  <source src={elvideo} type="video/mp4"/>
                </video>

                <div className= "vi">

                <img src={require ('../components/principal/imagen/logo.png')} className="logodos" />
                  <h1> Bienvenidos </h1>



              </div>


                  </div>
                  </div>

        );
    }
}

export default Background;
