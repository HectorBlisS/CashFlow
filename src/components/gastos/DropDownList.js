import React, {Component} from 'react';

class DropDownList extends Component{
    render(){
        const {data,nombre,etiqueta, handleChange} = this.props;
        const dataMap = data.map((r) =>
            <option value={r.label}>{r.value}</option>
        );
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <select className="propio" id={nombre} name={nombre} onChange={handleChange} >
                    {dataMap}
                </select>
            </div>
        );
    }
}

export default DropDownList;