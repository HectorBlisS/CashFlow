import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';


const Mui = () => (

    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>

);

const WithRouter = () => (
    <BrowserRouter>
        <Mui/>
    </BrowserRouter>
);



ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
