import React from 'react'
import Dashboard from './assets/Components/Dashboard.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Add from './assets/Components/Add.jsx'
import Edit from './assets/Components/Edit.jsx'
const App = () => {
  return (
<>
  <BrowserRouter>
    <Routes>
            <Route path='/add' element={<Add/>}></Route>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
</>
  )
}
export default App;
