import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 import
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Ensure Keycloak is initialized before rendering the app
root.render(
 
              <BrowserRouter>
              <App/>
              </BrowserRouter>
 
)
