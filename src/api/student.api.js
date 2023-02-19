import axios from "axios";
export const getStudents= async()=>{
    return await axios.get("http://localhost:8080/alumnos")
}
export const createStudent= async(alumno)=>{
  return await axios.post("http://localhost:8080/alumnos",alumno)
}
export const deleteStudent= async(id)=>{
  return await axios.delete("http://localhost:8080/alumnos",id)
}
export const updateStudent= async(id)=>{
  return await axios.put("http://localhost:8080/alumnos",id)
}
