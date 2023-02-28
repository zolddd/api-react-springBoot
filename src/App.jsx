import 'bootstrap/dist/css/bootstrap.min.css';
import FormRegisterStudent from "./components/molecule/FormRegisterStudent"
import FormCreateCourse from "./components/molecule/FormCreateCourse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CourseContextProvider } from "./context/CourseContext";
import HomeStudent from "./pages/HomeStudent";
import LandigPage from "./pages/LandigPage";
import CoursesStudent from "./pages/CoursesStudent";
import HomeTeacher from "./pages/HomeTeacher";
import FormRegisterTeacher from "./components/molecule/FormRegisterTeacher";
import FormEditCourse from './components/molecule/FormEditCourse';



function App() {
  return (
    <CourseContextProvider>
       <Routes>
        <Route path="/" element={<LandigPage />} />
        <Route path="/registerStudent" element={<FormRegisterStudent/>} />
        <Route path="/registerTeacher" element={<FormRegisterTeacher/>} />
        <Route path="/createCourse" element={<FormCreateCourse />} />
        <Route path="/coursesStudent" element={<CoursesStudent/>} />
        <Route path="/registerStudent" element={<FormRegisterStudent />} />
        <Route path="/editCourse/:id" element={<FormEditCourse />} />
      </Routes>
    </CourseContextProvider>
  )
}

export default App
