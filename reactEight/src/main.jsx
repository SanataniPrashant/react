import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {provider} from "react-redux"
import Store from './Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider Store = {Store} >
    <App />
    </Provider>
    
  </StrictMode>,
)
