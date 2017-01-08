import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//css
import './music_font/css/fontello.css';
import './index.css';
//jamendo
import Jamendo from 'jamendo';
//demo key
let clientApi = "56d30c95";
var jam = new Jamendo({
    client_id : clientApi,     // Specify your client_id
    protocol  : 'http',           // HTTP protocol to use, http or https
    version   : 'v3.0',           // Use the specified API version
    debug     : false   ,          // Print the whole response object and body in the console
    rejectUnauthorized: false
});
ReactDOM.render(
  <App jam={jam}/>,
  document.getElementById('root')
);
