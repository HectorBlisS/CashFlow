import React from 'react';


class Ejemplo extends React.Component{
    
    goHome = () => {
        this.props.lupe.push("/login");
    };
    
    render(){
        return(
            <button
        onClick={this.goHome}
        >Inicia</button>
        );
    }
}

export default Ejemplo;