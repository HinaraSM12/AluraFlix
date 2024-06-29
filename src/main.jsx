import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import { GlobalProvider } from '@src/context/GlobalContext';
import GlobalStyles from '@src/componentes/GlobalStyles'; // Asegúrate de importar correctamente


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyles />
      <AppRoutes />
    </GlobalProvider>
  </React.StrictMode>,
)
