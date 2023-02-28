import axios from "axios";
export const getTeachers= async()=>{
    return await axios.get("http://localhost:8080/courses")
}
export const createTeacher= async(course)=>{
  return await axios.post("http://localhost:8080/courses",course)
}
export const deleteTeacher= async(id)=>{
  return await axios.delete(`http://localhost:8080/courses/${id}`);
}
export const updateTeacher= async(id,course)=>{
  return await axios.put(`http://localhost:8080/courses/${id}`,course);
}