import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

document.title='Sadeq Admin Panel'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

