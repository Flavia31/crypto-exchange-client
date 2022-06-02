import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './ThemeProvider'
import { BrowserRouter, Routes, Route,} from "react-router-dom"
import { LoginPage } from './pages/login-page/LoginPage.js'

ReactDOM.render(
  <ThemeProvider>
    {/* <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
