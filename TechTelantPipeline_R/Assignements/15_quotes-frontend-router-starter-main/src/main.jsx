import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import './App.css'
import AppRoutes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>React Router Workshop</p>
    {/* You may remove the p tag above once you understand the code below */}
    {/* 
      Just know that your App is wrapped in the BrowserRouter
      and this allows your App to utilize hooks/functions, etc. provided by React Router
    */}
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
