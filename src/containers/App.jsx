import 'bootstrap/dist/css/bootstrap.min.css';
import FormRegisterStudent from "../components/molecules/FormRegisterStudent"
import FormCreateCourse from "../components/molecules/FormCreateCourse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CourseContextProvider } from "../context/CourseContext";
/* import HomeStudent from "./pages/HomeStudent"; */
import CoursesStudent from "../pages/CoursesStudent";
/* import HomeTeacher from "./pages/HomeTeacher"; */
import FormRegisterTeacher from "../components/molecules/FormRegisterTeacher";
import FormEditCourse from '../components/molecules/FormEditCourse';
import LandingPage from "../components/organisms/LandingPage";
import FormLoginTeacher from '../components/organisms/FormLoginTeacher';
import RegistroCursos from '../components/organisms/RegistroCursos';
import HomeTeacher from '../pages/HomeTeacher';

function App() {
  return (
    <CourseContextProvider>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registerStudent" element={<FormRegisterStudent/>} />
        <Route path="/registerTeacher" element={<FormRegisterTeacher/>} />
        <Route path="/createCourse" element={<RegistroCursos />} />
        <Route path="/coursesStudent" element={<CoursesStudent/>} />
        <Route path="/registerStudent" element={<FormRegisterStudent />} />
        <Route path="/editCourse/:id" element={<FormEditCourse />} />
        <Route path="/login-teacher" element={<FormLoginTeacher />} />
        <Route path="/registro_cursos" element={<RegistroCursos />} />
        <Route path="/home_teacher" element={<HomeTeacher />} />
      </Routes>
    </CourseContextProvider>
  )
}

export default App
