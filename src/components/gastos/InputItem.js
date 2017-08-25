import React, {Component} from 'react';

class InputItem extends Component{
    render(){
        const {value, tipo,nombre,etiqueta,handleChange} = this.props;
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <input value={value} type={tipo} name={nombre} id={nombre} onChange={handleChange} />
            </div>
        );
    }
}

export default InputItem;