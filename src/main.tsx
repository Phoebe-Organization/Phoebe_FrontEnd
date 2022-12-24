import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/styles/global';
import { AuthProvider } from './contexts/AuthProvider';
// import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
