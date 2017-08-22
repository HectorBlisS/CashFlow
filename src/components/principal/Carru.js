import React from 'react';
import '../../App.css';
import {Carousel} from 'antd';

class Carru extends React.Component {
   render (){
       return (

<section>
   <Carousel autoplay effect="fade" dots="false" >

      <div> <img src={require ('./imagen/uno.jpg')}  /></div>
     
     <div> <img src={require ('./imagen/tres.jpg')}  /></div>

   </Carousel>
 </section>


         );
     }
 }
 export default Carru;
