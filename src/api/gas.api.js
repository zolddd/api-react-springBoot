import axios from "axios";

export const getGases= async()=>{
    return await axios.get(`http://localhost:8080/gas/getAll`)
}
export const getGas = async (id) => {
  return await axios.get(`http://localhost:8080/gas/getId/${id}`);
};
export const registerGas= async(gas)=>{
  return await axios.post(`http://localhost:8080/gas/create`,gas)
}
export const deleteGas= async(id)=>{
  return await axios.delete(`http://localhost:8080/gas/delete/${id}`);
}
export const updateCourse= async(id,gas)=>{
  return await axios.put(`http://localhost:8080/gas/update/${id}`,gas);
}