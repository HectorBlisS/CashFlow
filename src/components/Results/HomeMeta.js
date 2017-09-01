import React from 'react';
import  firebase from '../../firebase';
import toastr from 'toastr';
import Siguiente from '../../components/principal/Siguiente';




class HomeMeta extends React.Component {
    constructor(props){
        super(props);
        this.state={user:''};
        firebase.auth()
            .onAuthStateChanged(user=> {
                if(user){
                    this.setState({
                        user:user
                    });
                }else{
                    toastr.error("Debe iniciar sesión");
                    this.props.history.push('/loginpage');
                }
            });

    }
    render (){
        return (



<div  >


<section  style={{ width:'245px' ,  float:'left' }} > <Siguiente/> </section>



</div>








        );
    }
}
export default HomeMeta;
