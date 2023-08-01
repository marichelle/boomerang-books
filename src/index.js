import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BooksContextProvider } from './contexts/BooksContext'
import './styles/index.css'

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)

root.render(
  <React.StrictMode>
    <BooksContextProvider>
      <App />
    </BooksContextProvider>
  </React.StrictMode>
)
