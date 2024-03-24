import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import Toast from "./components/Toast/Toast.jsx"
import { AppContextProvider } from './context/AppContext.jsx';
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
        <Toast/>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)
