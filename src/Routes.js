import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/login/LoginPage';
import IngresosPage from './components/ingresos/IngresosPage';
import IngresosLista from './components/ingresos/IngresosLista';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/ingresos" component={IngresosPage}/>
      <Route path="/lista" component={IngresosLista} />
    </Switch>

);

export default Routes;
