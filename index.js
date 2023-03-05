import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import * as AWS from 'aws-sdk'
import { HashRouter } from 'react-router-dom';

const configuration = {
    region: 'us-east-1',
    secretAccessKey: 'VbWDX/lQUkP6SDnWW49mCl8M1b3FALHKmq4l/8BH',
    accessKeyId: 'AKIA4NXSIX23DVJTOZH2'
}

AWS.config.update(configuration)

localStorage.setItem('token', "");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
