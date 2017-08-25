import React, {Component} from 'react';

class DropDownList extends Component{
    render(){
        const {data,nombre,etiqueta} = this.props;
        const dataMap = data.map((r) =>
            <option value={r.value}>{r.label}</option>
        );
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <select className="propio" id={nombre} name={nombre} >
                    {dataMap}
                </select>
            </div>
        );
    }
}

export default DropDownList;