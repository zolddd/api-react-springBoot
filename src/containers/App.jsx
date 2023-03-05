import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login';
import RegisterCourses from '../pages/RegisterCourses';
import LandingPage from '../pages/LandingPage';
import HomeMaestro from '../pages/HomeMaestro';
import HomeStudents from '../pages/HomeStudents';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register-courses' element={<RegisterCourses />} />
          <Route path='/HomeCursos' element={<HomeMaestro />} />
          <Route path='/HomeStudent' element={<HomeStudents/>}/>
        </Routes>
    </div>
  )
}

export default App;
