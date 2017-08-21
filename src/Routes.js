import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/login/LoginPage';
import IngresosPage from './components/ingresos/IngresosPage';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/ingresos" component={IngresosPage}/>
    </Switch>

);

export default Routes;
