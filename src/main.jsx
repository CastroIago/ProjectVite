import React from 'react'
import ReactDOM from 'react-dom/client' 

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Home from './components/pages/Home.jsx'
import Search from './components/pages/Search.jsx'
import Serie from './components/pages/Serie.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
          <Route element = {<App />}>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="serie" element = {<Serie/>} />
      </Route>  
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)