import React, {Component} from 'react';

class InputItem extends Component{
    render(){
        const {tipo,nombre,etiqueta,handleChange} = this.props;
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <input type={tipo} name={nombre} id={nombre} onChange={handleChange} />
            </div>
        );
    }
}

export default InputItem;