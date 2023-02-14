import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordGenerator from './passwordGenerator/PasswordGenerator';
import { Provider } from 'react-redux';
import  store  from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PasswordGenerator />
    </Provider>
  </React.StrictMode>
);
