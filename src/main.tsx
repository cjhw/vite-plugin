import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import fib from 'virtual:fib'
import env from 'virtual:env'

console.log(env)

alert(`结果: ${fib(10)}`)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
