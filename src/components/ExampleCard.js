import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class ExampleCard extends Component{
  render(){
    return(
      <Card style={{margin:"20px"}}>
        <CardHeader
          title="Miguel Rafael González Durón"
          subtitle="Programmer at Fixter.org"
          avatar="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/14907044_10210911872496632_8044975656506544532_n.jpg?oh=afe0c1d17680f6b0feeb3c52787c87be&oe=59EC5631"
        />
        <CardMedia
          overlay={<CardTitle title="Islas Marietas" subtitle="Sin lugar a duda esta isla es interesante, sin embargo, programar en React lo es aún más" />}
        >
          <img src="https://aiesec.org.mx/wp-content/uploads/2015/08/Marietas-001-4.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Islas Marietas" subtitle="Nayarit, México" />
        <CardText>
        El Parque Nacional Islas Marietas, son dos islas deshabitadas cercanas a la costa mexicana del Estado de Nayarit.
        El archipiélago, de origen volcánico, está compuesto por la isla Larga y la isla Redonda.
        El 14 de abril de 2016 la Comisión Nacional de Áreas Naturales Protegidas (Conanp) anunció el cierre al público de
        las islas debido al deterioro ambiental causado por su sobreexplotación turística.3​ El acceso quedará restringido a partir del 9 de mayo.​
        </CardText>

      </Card>
    );
  }
}

export default ExampleCard;
