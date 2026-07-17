import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
;
import Nav from './components/Nav';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Createnote from './components/Createnote';
import Update from './components/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav/>}>
          <Route index element={<Home />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='login' element={<Login />}/>
        </Route>
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='createnote' element={<Createnote/>}/>
          <Route path='updatenote' element={<Update/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App