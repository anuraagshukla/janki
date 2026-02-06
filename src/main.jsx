import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-bg min-h-screen text-text">
    <App />
<ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  </StrictMode>,
)
