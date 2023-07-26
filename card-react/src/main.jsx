import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardContextProvide from './context/CardContextProvide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardContextProvide>
    <App />
    </CardContextProvide>
   
  </React.StrictMode>,
)
