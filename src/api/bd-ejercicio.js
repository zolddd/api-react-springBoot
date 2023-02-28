import axios from "axios";
export const getStudentsDB= async()=>{
    return await axios.get("http://localhost:8080/users")
}
export const createStudentDB= async(student)=>{
  return await axios.post("http://localhost:8080/users/create",student)
}
