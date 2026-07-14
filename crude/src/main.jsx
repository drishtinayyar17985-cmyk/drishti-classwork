import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Add from './assets/Components/Add.jsx'
import './index.css'
import Dashboard from './assets/Components/Dashboard.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
            <Route path='/add' element={<Add/>}></Route>
      <Route path='/' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>

   
  </StrictMode>,
)
