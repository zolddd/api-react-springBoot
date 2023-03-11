import axios from "axios";
export const getTeachers= async()=>{
    return await axios.get("http://localhost:8080/teachers/getAll")
}
export const getTeacher= async(id)=>{
  return await axios.get(`http://localhost:8080/teachers/getId/${id}`)
}
export const createTeacher= async(teacher)=>{
  return await axios.post("http://localhost:8080/teachers/create",teacher)
}
export const deleteTeacher= async(id)=>{
  return await axios.delete(`http://localhost:8080/teachers/delete/${id}`);
}
export const updateTeacher= async(id,teacher)=>{
  return await axios.put(`http://localhost:8080/teachers/update/${id}`,teacher);
}