import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function created(state) {
    state.gl.setClearColor('#000000',1);
}

createRoot(document.getElementById('root')).render(
    <App />
)
