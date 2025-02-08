import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from './routes/index.jsx';
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
