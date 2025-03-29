import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './LoginPage.jsx'
import LandingPage from './LandingPage.jsx'
import React from 'react';
import GridAnimation from './GridAnimation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GridAnimation/>
    <LandingPage/>
    <LoginPage/>
    
    
  </StrictMode>
)
