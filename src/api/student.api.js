import axios from "axios";

export const getStudents = async () => {
  return await axios.get(`http://localhost:8080/students/getAll`);
};

export const getStudent = async (id) => {
  return await axios.get(`http://localhost:8080/students/getId/${id}`);
};

export const createStudent = async (student) => {
  return await axios.post(`http://localhost:8080/students/create`, student);
};

export const updateStudent = async (id,student) => {
  return await axios.put(`http://localhost:8080/students/update/${id}`,student);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`http://localhost:8080/students/delete/${id}`);
};
