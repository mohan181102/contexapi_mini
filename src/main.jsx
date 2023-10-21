import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Userdataprovider from './contex/contexprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Userdataprovider>
    <App />
    </Userdataprovider>
  </React.StrictMode>,
)
