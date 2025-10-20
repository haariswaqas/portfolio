const theme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (theme === 'dark' || (!theme && prefersDark)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}



import React from 'react';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './tailwind.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);