import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
