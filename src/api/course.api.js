import axios from "axios";
const header={
  'Content-Type': 'multipart/form-data'
}

export const getCourses= async()=>{
    return await axios.get("http://localhost:8080/courses")
}
export const createCourse= async(course)=>{
  return await axios.post("http://localhost:8080/courses",course,header)
}
export const deleteCourse= async(id)=>{
  return await axios.delete(`http://localhost:8080/courses/${id}`);
}
export const updateCourse= async(id,course)=>{
  return await axios.put(`http://localhost:8080/courses/${id}`,course);
}