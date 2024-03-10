import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from "./context/Context";
import './index.css'
import '@fontsource-variable/noto-sans-jp';// Supports weights 100-900

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
          <App />
      </ContextProvider>
  </React.StrictMode>,
)
