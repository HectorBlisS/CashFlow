import React, {Component} from 'react';

class InputItem extends Component{
    render(){
<<<<<<< HEAD
        const {tipo,nombre,etiqueta,handleChange} = this.props;
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <input type={tipo} name={nombre} id={nombre} onChange={handleChange} />
=======
        const {value, tipo,nombre,etiqueta,handleChange} = this.props;
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <input value={value} type={tipo} name={nombre} id={nombre} onChange={handleChange} />
>>>>>>> 4d29e7d54e6837d307fc9036a08299d80d106503
            </div>
        );
    }
}

export default InputItem;