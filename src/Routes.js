import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/login/LoginPage';
import GastosPage from './components/gastos/GastosPage';
import AddGasto from './components/gastos/AddGasto';



const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/gastos/addGasto" component={AddGasto}/>
        <Route path="/gastos" component={GastosPage}/>

    </Switch>

);

export default Routes;