import React, {Component} from 'react';
import './inicia.css';

class Inicia extends Component {
    render (){
        return (

          <div>
          <form className='contacto'>
                    <div><label>Tu Nombre:</label><input type='text' value=''/></div>
                    <div><label>Tu Email:</label><input type='text' value=''/></div>
                    <div><label>Asunto:</label><input type='text' value=''/></div>
                    <div><label>Mensaje:</label><textarea rows='6'></textarea></div>
                    <div><input type='submit' value='Envia Mensaje'/></div>
                </form>

</div>



        );
    }
}
export default Inicia;
