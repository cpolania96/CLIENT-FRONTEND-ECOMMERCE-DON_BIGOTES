import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getFirestoreApp } from './firebase/dbConfig';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
