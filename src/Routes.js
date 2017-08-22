
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';

import LoginForm from './components/login/LoginForm';

import LoginPage from './components/login/LoginPage';
import GastosPage from './components/gastos/GastosPage';
import AddGasto from './components/gastos/AddGasto';
import IngresosPage from './components/ingresos/IngresosPage';
import IngresosLista from './components/ingresos/IngresosLista';
import Perfil from './components/login/Perfil';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/gastos/addGasto" component={AddGasto}/>
        <Route path="/gastos" component={GastosPage}/>
        <Route path="/ingresos" component={IngresosPage}/>
        <Route path="/lista" component={IngresosLista} />
        <Route path="/perfil" component={Perfil}/>

    </Switch>

);

export default Routes;
