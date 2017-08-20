import React from 'react';
import '../App.css';
import {Carousel} from 'antd';

class Carru extends React.Component {
   render (){
       return (

<section>
   <Carousel autoplay effect="fade" dots="false" >
     <div>
       <h3>1</h3></div>
     <div><h3>2</h3></div>
     <div><h3>3</h3></div>
     <div><h3>4</h3></div>
   </Carousel>
 </section>


         );
     }
 }
 export default Carru;
