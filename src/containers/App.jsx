import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../pages/Login';
import RegisterCourses from '../pages/RegisterCourses';
import LandingPage from '../pages/LandingPage';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register-courses' element={<RegisterCourses />} />
        </Routes>
    </div>
  )
}

export default App;
