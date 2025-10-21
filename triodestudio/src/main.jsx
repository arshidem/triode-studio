import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { Analytics } from '@vercel/analytics/react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics/>
  </StrictMode>,
)
