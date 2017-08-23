import React, {Component} from 'react';
import { Card } from 'antd';
import Buscador from './Buscador';
import Imagen from './Imagen';
import Abc from './Abc';
import './glosario.css';
import { Icon, Button, Input, AutoComplete } from 'antd';

const Option = AutoComplete.Option;



class GlosarioHome extends Component{  


    

   
    changeRoute = () => {
        this.props.history.push("/");  
    }

    
    render(){
        return(
         
        
            <div> 
          <div className="titulo"> 
            
              
               <div className="Fondo"> 
                <h1>GLOSARIO</h1>
                   <Imagen/>
                   
                   <Buscador /> </div>
                  
            
                
               
          
                </div> 
            
             
                    

<div className="Card">

  

<div style={{ background: '#F3C5F0', padding: '10px', width:'100%'}}>

  
<Card title="ACTIVO: (Asset)"  >


    <p>Algo que coloca dinero " en un bolsillo" con poco trabajo <br/> <a href=" ">More</a> </p>
    
  </Card>  <br/> <br/>

  <Card title="ACCIÓN: (Stoke Share)" >
    <p>Una acción representa la propiedad de una empresa. Los accionistas (aquellos que poseen acciones en una empresa) 
        son los propietarios reales de la empresa.
    </p>
    
  </Card>  <br/> <br/>

  <Card title="BALANCE GENERAL: (Balance sheet)"  >
    <p>Les muestra sus bienes activos y pasivos. </p>
    
  </Card>  <br/> <br/>

  <Card title="BONOS DE AHORRO DEL ESTADO: (Gov´t saving bond)" >
    <p>Préstamo de un individuo al Estado a cambio del pago de interés</p>
    
  </Card>  <br/> <br/>

  <Card title="CAPITAL: (Capital)" >
    <p>Dinero en efectivo u otros bienes de valor preacordado</p>
    
  </Card>  <br/> <br/>

  <Card title="CAPRICHOS: (Doodads)" >
    <p>Gastos, a menudo innecesarios o imprevistos, que simplemente le quitan dinero</p>
    
  </Card>  <br/> <br/>

  <Card title="CERTIFICADO DE DÉPOSITO: (Certificate of Deposit)">
    <p>Préstamo al gobierno y a las empresas emitido por intermedio de los bancos, con fechas de vencimiento 
        y tipos de interés específicos</p>
    
  </Card>  <br/> <br/>

  <Card title="CONSORCIO DE INVERSIÓN INMOBILIARIA: (REIT o Real Estate Investment Trust)" >
    <p>Similar a un fondo de inversión, pero en el ámbito inmobiliario. Similar a un fondo de inversión, 
        pero exclusivamente en el ámbito inmobiliario</p>
    
  </Card>  <br/> <br/>

  <Card title="DIVIDENDO: (Dividend)" >
    <p>Distribución de los beneficios de una empresa a sus accionistas</p>
    
  </Card>  <br/> <br/>

  <Card title="EMBARGO: (Foreclosure)" >
    <p>Un banco o individuo confisca su propiedad por no pagar la hipoteca</p>
    
  </Card>  <br/> <br/>

  <Card title="EMBARGO FISCAL: (Tax lien)" >
    <p>Demanda legal por el incumplimiento del pago de impuestos sobre una propiedad</p>
    
  </Card>  <br/> <br/>

  <Card title="EMPRESA AUTOMATIZADA: (Automated business)" >
    <p>Empresa dirigida mediante tecnología en lugar de personas</p> 
  </Card>  <br/> <br/>

  <Card title="ESTADO DE PÉRDIDAS Y GANANCIAS: (Income statement)" >
    <p>Le muestra sus ingresos y gastos durante un periodo de tiempo. 
        También se llama cuenta de pérdidas y ganancias. (Se encuentra en la parte izquierda
        de su Tarjeta de Juego</p> 
  </Card>  <br/> <br/>

  <Card title="FLUJO DE EFECTIVO : (Cash Flow)" >
    <p>Dinero en efectivo que entra (ingresos) y dinero en efectivo que sale (gastos).
        La dirección del flujo de efectivo determina si algo es ingreso, gasto, activo o pasivo.
        El flujo de efectivo nos indica si la situación es favorable o no.</p> 
  </Card>  <br/> <br/>

  <Card title="FONDO DE INVERSIÓN : (Mutual fund)" >
    <p>Un conjunto de acciones, bonos, y valores bursátiles, gestionados por una empresa de inversiones 
        profesional y comprados por particulares mediante acciones.
        Las acciones no poseen un valor de propiedad directo en las diversas compañias</p> 
  </Card>  <br/> <br/>
  
  <Card title="FRACCIONAMIENTO DE ACCIONES: (Shares split)" >
    <p>Desición corporativa en la que se aumenta el número de acciones que usted posee
      y disminuye el precio por acción.</p> 
  </Card>  <br/> <br/>

  <Card title="GANANCIAS Y PÉRDIDAS DE CAPITAL: (Capital gain/loss)" >
    <p>Diferencia entre lo que costó una inversión y el precio por el que se la vendió</p> 
  </Card>  <br/> <br/>

  <Card title="HIPOTECA: (Mortagage)" >
    <p>Cuando se adquiere un bien inmueble financiado, se emplea dicha propiedad como garantía
      del total financiado o prestado. La hipoteca es un instrumento de seguridad</p> 
  </Card>  <br/> <br/>

  <Card title="INFLACIÓN: (Inflation)" >
    <p>Situación económica en la que los precios al consumidor suben </p> 
  </Card>  <br/> <br/>

  <Card title="INGRESO PASIVO: (Passive income)">
    <p>Ingreso generado</p> 
  </Card>  <br/> <br/>

  <Card title="INTERCAMBIO DE IMPUESTOS DIFERIDOS: (Tax-Deferred Exchange)" >
    <p>Método de compras y vender propiedades inmobiliarias que le permite diferir el pago de 
      impuestos sobre sus beneficios de inversiones.</p> 
  </Card>  <br/> <br/>

  <Card title="MERCADO: (The Market)">
    <p>Donde se compran y venden productos</p> 
  </Card>  <br/> <br/>

  <Card title="OFERTA EN EFECTIVO VS. OFERTA FINANCIADA: (Cash offer vs. Financed offer)" >
    <p>Alguien que paga en efectivo Vs. alguien que realiza un pago inicial y financia el reto</p> 
  </Card>  <br/> <br/>

  <Card title="OFERTA PÚBLICA INICIAL: (IPO, Initial Public Oferring)" >
    <p>Oferta pública Inicial. La primera vez que una compañia ofrece acciones al público general</p> 
  </Card>  <br/> <br/>

  <Card title="PAGO INICIAL: (Down payment)" >
    <p>Porcentaje de precio de compra que paga un inversor por una inversión. El resto lo financia con otros medios.</p> 
  </Card>  <br/> <br/>

  <Card title="PASIVOS: (Liabilities)">
    <p>Algo que hace que el dinero "salga de su bolsillo </p> 
  </Card>  <br/> <br/>

  <Card title="RANGO DE VARIACIÓN: (Trading range)" >
    <p>La media de precios altos y bajos de una inversión</p> 
  </Card>  <br/> <br/>

   <Card title="RENDIMIENTO DE LA INVERSIÓN: (Return on Investment)">
    <p>Rendimiento de la inversión. Retorno del capital, como porcentaje de una inversión 
      Ejemplo: un apartamento cuesta $500.000. Usted paga $100.000 como pago inicial. 
      Tiene un flujo de efectivo mensual de $2.000. Su rendimiento de la inversión en $2.000 x 12 dividido por $100.000 o 24%</p> 
  </Card>  <br/> <br/>

   <Card title="RENDIMIENTO DEL EFECTIVO:">
    <p>Retorno del efectivo. (Ver rendimiento de la inversión)</p> 
  </Card>  <br/> <br/>

   <Card title="SOCIEDAD DE RESPONSABILIDAD LIMITADA (SL): (Limited partnership)" >
    <p>Entidad legal constituida para mantener activos. Establece responsabilidad limitada 
      a un grupo limitado de miembros.</p> 
  </Card> 

 
   <br/> <br/> <br/>  
<button
                  onClick={this.changeRoute}
                  >
                   IHATE  
                 </button>  
   </div> </div> <Abc/>    
                </div> 
             
            
     
        
        );
    }
}

export default GlosarioHome;