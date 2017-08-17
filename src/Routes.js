import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route path="/login" component={LoginPage} />
    </Switch>
   
);

export default Routes;