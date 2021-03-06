
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/login/LoginPage';
import GastosPage from './components/gastos/GastosPage';
import AddGasto from './components/gastos/AddGasto';
import IngresosPage from './components/ingresos/IngresosPage';
import IngresosLista from './components/ingresos/IngresosLista';
import Perfil from './components/login/Perfil';
import Registro from './components/login/Registro';
import SignUpPage from './components/signup/SignUpPage';
import Formu1 from './components/Formulario/Formu1';
import GlosarioHome from './components/Glosario/GlosarioHome';
import DepositPage from './components/ingresos/DepositPage';
import HomeMeta from './components/Results/HomeMeta';
import Siguiente from './components/principal/Siguiente';
import Meta from './components/Results/MetaPage';
import Activos from './components/Results/ActivPage';
import Progreso from './components/Results/ProPage';


import DatosLista from './components/Formulario/DatosLista';





const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/loginpage" component={LoginPage}/>
        <Route path="/gastos/addGasto" component={AddGasto}/>
        <Route path="/gastos" component={GastosPage}/>
        <Route path="/ingresos" component={IngresosPage}/>
        <Route path="/lista" component={IngresosLista} />
        <Route path="/perfil" component={Perfil}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/Datosperfil" component={Formu1}/>
        <Route path="/Glosario" component={GlosarioHome}/>
        <Route path="/HomeMeta" component={HomeMeta}/>
        <Route path="/Meta" component={Meta}/>
        <Route path="/Activos" component={Activos}/>
        <Route path="/Progreso" component={Progreso}/>
        <Route path="/Formu1" component={Formu1}/>
        <Route path="/Sigui" component={Siguiente}/>
        <Route path="/Deposit" component={DepositPage}/>

        <Route path="/lista" component={DatosLista} />




    </Switch>

);

export default Routes;
