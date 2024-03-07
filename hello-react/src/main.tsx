import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM

import App from './App'; // Assuming App.js is in the same directory
import './index.css';

// Use ReactDOM.render instead of createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);