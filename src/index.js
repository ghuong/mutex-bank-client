import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS (must load BEFORE Components)
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
