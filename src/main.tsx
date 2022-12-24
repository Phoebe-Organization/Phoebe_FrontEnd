import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/styles/global';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { OnboardingProvider } from './contexts/Onboarding/OnboardingProvider';
// import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <OnboardingProvider>
        <GlobalStyle />
        <App />
      </OnboardingProvider>
    </AuthProvider>
  </React.StrictMode>,
);
