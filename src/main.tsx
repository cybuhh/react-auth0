import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import {AUTH_CONFIG} from './config.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
    domain={AUTH_CONFIG.domain}
    clientId={AUTH_CONFIG.clientId}
    authorizationParams={AUTH_CONFIG.authorizationParams}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)
