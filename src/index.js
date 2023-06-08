import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context';
import Context from './store/Context'; 
import firebase from './firebase/config';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}> {/* Wrap 'firebase' inside an object */}
    <Context>
        <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
