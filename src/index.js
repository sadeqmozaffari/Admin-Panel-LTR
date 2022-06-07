import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import { Provider } from 'react-redux';
import store from './redux/reducers';
 
document.title='Admin panel'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
 
    <Layout />

  </React.StrictMode>
  </Provider>
);

