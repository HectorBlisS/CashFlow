import React, {Component} from 'react';
import { Card } from 'antd';
import Buscador from './Buscador';
import Imagen from './Imagen';
import Abc from './Abc';
import './glosario.css';
import {Link, NavLink} from 'react-router-dom';

import { Icon, Button, Input, AutoComplete } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


const Option = AutoComplete.Option;



class GlosarioHome extends Component{  


    

   
    changeRoute = () => {
        this.props.history.push("/");  
    }

    
    render(){
        

         
        
         return(
        
            
          <div className="titulo"> 
            
              
               <div className="Imagen"> 
                 <Imagen/> <h1>GLOSARIO</h1>
                
                     <Buscador />  
                  
    
                 </div>

<div>
  <Card>
    
    
<div style={{ background: '#BF9BBD', padding: '4px', width:'100%'}}>
   <Collapse accordion  >
   
    <Panel header={'ACTIVO: (Asset)'} key="1" >
      <p>Algo que coloca dinero " en un bolsillo" con poco trabajo</p>
    </Panel>
    <Panel header={'ACCIÓN: (Stoke Share)'} key="2">
      <p>Una acción representa la propiedad de una empresa. Los accionistas (aquellos que poseen acciones en una empresa) 
        son los propietarios reales de la empresa.</p>
    </Panel>
    <Panel header={'BALANCE GENERAL: (Balance sheet)'} key="3">
      <p>Les muestra sus bienes activos y pasivos.</p>
    </Panel>
    <Panel header={'BONOS DE AHORRO DEL ESTADO: (Gov´t saving bond)'} key="4">
      <p>Préstamo de un individuo al Estado a cambio del pago de interés</p>
    </Panel>
    <Panel header={'CAPITAL: (Capital)'} key="5">
      <p>Dinero en efectivo u otros bienes de valor preacordado</p>
    </Panel>
    <Panel header={'CAPRICHOS: (Doodads)'} key="6">
      <p>Gastos, a menudo innecesarios o imprevistos, que simplemente le quitan dinero</p>
    </Panel>
    <Panel header={'CERTIFICADO DE DÉPOSITO: (Certificate of Deposit)'} key="7">
      <p>Préstamo al gobierno y a las empresas emitido por intermedio de los bancos, con fechas de vencimiento 
        y tipos de interés específicos</p>
    </Panel>
    <Panel header={'CONSORCIO DE INVERSIÓN INMOBILIARIA: (REIT o Real Estate Investment Trust)'} key="8">
      <p>Similar a un fondo de inversión, pero en el ámbito inmobiliario. Similar a un fondo de inversión, 
        pero exclusivamente en el ámbito inmobiliario</p>
    </Panel>
    <Panel header={'DIVIDENDO: (Dividend)'} key="9">
      <p>Distribución de los beneficios de una empresa a sus accionistas</p>
    </Panel>
    <Panel header={'EMBARGO: (Foreclosure)'} key="10">
      <p>Un banco o individuo confisca su propiedad por no pagar la hipoteca</p>
    </Panel>
    <Panel header={'EMBARGO FISCAL: (Tax lien)'} key="11">
      <p>Demanda legal por el incumplimiento del pago de impuestos sobre una propiedad</p>
    </Panel>
    <Panel header={'EMPRESA AUTOMATIZADA: (Automated business)'} key="12">
      <p>Empresa dirigida mediante tecnología en lugar de personas</p>
    </Panel>
    <Panel header={'ESTADO DE PÉRDIDAS Y GANANCIAS: (Income statement)'} key="13">
      <p>Le muestra sus ingresos y gastos durante un periodo de tiempo. 
        También se llama cuenta de pérdidas y ganancias. (Se encuentra en la parte izquierda
        de su Tarjeta de Juego</p>
    </Panel>
    <Panel header={'FLUJO DE EFECTIVO : (Cash Flow)'} key="14">
      <p>Dinero en efectivo que entra (ingresos) y dinero en efectivo que sale (gastos).
        La dirección del flujo de efectivo determina si algo es ingreso, gasto, activo o pasivo.
        El flujo de efectivo nos indica si la situación es favorable o no.</p>
    </Panel>
    <Panel header={'FONDO DE INVERSIÓN : (Mutual fund)'} key="15">
      <p>Un conjunto de acciones, bonos, y valores bursátiles, gestionados por una empresa de inversiones 
        profesional y comprados por particulares mediante acciones.
        Las acciones no poseen un valor de propiedad directo en las diversas compañias</p>
    </Panel>
    <Panel header={'FRACCIONAMIENTO DE ACCIONES: (Shares split)'} key="16">
      <p>Desición corporativa en la que se aumenta el número de acciones que usted posee
      y disminuye el precio por acción</p>
    </Panel>
    <Panel header={'GANANCIAS Y PÉRDIDAS DE CAPITAL: (Capital gain/loss)'} key="17">
      <p>Diferencia entre lo que costó una inversión y el precio por el que se la vendió</p>
    </Panel>
    <Panel header={'INFLACIÓN: (Inflation)'} key="18">
      <p>Cuando se adquiere un bien inmueble financiado, se emplea dicha propiedad como garantía
      del total financiado o prestado. La hipoteca es un instrumento de seguridad</p>
    </Panel>
    <Panel header={'HIPOTECA: (Mortagage)'} key="19">
      <p>Situación económica en la que los precios al consumidor sube</p>
    </Panel>
    <Panel header={'INGRESO PASIVO: (Passive income))'} key="20">
      <p>Ingreso generado</p>
    </Panel>
    <Panel header={'INTERCAMBIO DE IMPUESTOS DIFERIDOS: (Tax-Deferred Exchange)'} key="21">
      <p>Método de compras y vender propiedades inmobiliarias que le permite diferir el pago de 
      impuestos sobre sus beneficios de inversiones</p>
    </Panel>
    <Panel header={'MERCADO: (The Market)'} key="22">
      <p>Donde se compran y venden productos</p>
    </Panel>
    <Panel header={'OFERTA EN EFECTIVO VS. OFERTA FINANCIADA: (Cash offer vs. Financed offer)'} key="23">
      <p>Alguien que paga en efectivo Vs. alguien que realiza un pago inicial y financia el reto</p>
    </Panel>
    <Panel header={'OFERTA PÚBLICA INICIAL: (IPO, Initial Public Oferring)'} key="24">
      <p>Oferta pública Inicial. La primera vez que una compañia ofrece acciones al público general</p>
    </Panel>
    <Panel header={'PAGO INICIAL: (Down payment)'} key="25">
      <p>Porcentaje de precio de compra que paga un inversor por una inversión. El resto lo financia con otros medios</p>
    </Panel>
    <Panel header={'PASIVOS: (Liabilities)'} key="26">
      <p>Algo que hace que el dinero "salga de su bolsillo</p>
    </Panel>
    <Panel header={'RANGO DE VARIACIÓN: (Trading range)'} key="27">
      <p>La media de precios altos y bajos de una inversión</p>
    </Panel>
    <Panel header={'RENDIMIENTO DE LA INVERSIÓN: (Return on Investment)'} key="28">
      <p>Rendimiento de la inversión. Retorno del capital, como porcentaje de una inversión 
      Ejemplo: un apartamento cuesta $500.000. Usted paga $100.000 como pago inicial. 
      Tiene un flujo de efectivo mensual de $2.000. Su rendimiento de la inversión en $2.000 x 12 dividido por $100.000 o 24%</p>
    </Panel>
    <Panel header={'RENDIMIENTO DEL EFECTIVO'} key="29">
      <p>Retorno del efectivo. <NavLink to="/Glosario"> ver: Rendimiento de la Inversión </NavLink> </p>
    </Panel>
 


    <Panel header={'SOCIEDAD DE RESPONSABILIDAD LIMITADA (SL): (Limited partnership)'} key="30">
      <p>Entidad legal constituida para mantener activos. Establece responsabilidad limitada 
      a un grupo limitado de miembros</p>
    </Panel> 
  </Collapse> </div>   </Card>
            
             
                    



  

  
</div> 
</div> 
        
        );
    }
}

export default GlosarioHome;