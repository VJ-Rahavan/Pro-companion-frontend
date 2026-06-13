import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { createApiClient } from '@pro-companion/shared';

createApiClient(import.meta.env.VITE_API_URL ?? 'http://localhost:3001', () =>
  localStorage.getItem('access_token'),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
