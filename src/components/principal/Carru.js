<<<<<<< HEAD:src/components/principal/Carru.js
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
=======
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
>>>>>>> 2fecef829fdac709a1927cbf552fa31fa10aec18:src/components/Carru.js
