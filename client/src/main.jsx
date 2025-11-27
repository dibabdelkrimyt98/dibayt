// client/src/main.jsx

import React from 'react';
// 💡 FIX: You must import createRoot using curly braces {}
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './i18n.js'; // Ensure your i18n setup is imported
import './index.css';

// Locate the root element in the HTML
const rootElement = document.getElementById('root');

// Use createRoot to render the application
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);