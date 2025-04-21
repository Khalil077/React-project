import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // 👈 Add this line
import { BrowserRouter } from 'react-router-dom';  // Make sure BrowserRouter is imported

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
)
