import axios from "axios";
export const getStudents = async () => {
  return await axios.get(`http://localhost:8080/students/getAll`);
};
export const getStudent = async (id) => {
  return await axios.get(`http://localhost:8080/students/getId/${id}`);
};

export const createStudent = async (alumno) => {
  return await axios.post(`http://localhost:8080/students/create`, alumno);
};

export const updateStudent = async (id) => {
  return await axios.put(`http://localhost:8080/students/update/${id}`);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`http://localhost:8080/students/delete/${id}`);
};
