import axios from 'axios';
export const getData=()=>{
    return axios.get(`http://localhost:8000/projects`)
}
export const getDataById=(id)=>{
    return axios.get(`http://localhost:8000/projects/${id}`)
}
export const addData=(data)=>{
    return axios.post(`http://localhost:8000/projects/`,data)
}
export const updateData=(id,newStatus)=>{
    return axios.patch(`http://localhost:8000/projects/${id}`,newStatus)
}
export const deleteData=(id)=>{
    return axios.delete(`http://localhost:8000/projects/${id}`)
}
export const filterClient=(c)=>{
    return axios.get(`http://localhost:8000/projects/search/?q=${c}`)
}
export const searchBy_Client_Project=(q)=>{
    return axios.get(`http://localhost:8000/projects/search/?q=${q}`)
}
