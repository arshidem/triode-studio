import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { Analytics } from '@vercel/analytics/react';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
