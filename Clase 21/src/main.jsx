import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
    /* Permite la app puede navegar entre rutas con react-router */
    <BrowserRouter>
        <App />
    </BrowserRouter>
)