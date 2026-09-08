import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

import { HelmetProvider } from 'react-helmet-async';

const root = document.getElementById('root');
if (!root) throw new Error('Could not find root element');
createRoot(root).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
