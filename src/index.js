import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';

import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';



import 'toastr/build/toastr.css';



const WithRouter = () => (
    <BrowserRouter>
       <LocaleProvider locale={esES}>
           <App/>
       </LocaleProvider>

    </BrowserRouter>
);



ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
