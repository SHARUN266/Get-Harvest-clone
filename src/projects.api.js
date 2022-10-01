import axios from 'axios';
export const getData=()=>{
    return axios.get(`https://getharvest-fake-api.herokuapp.com/projects`)
}
export const getDataById=(id)=>{
    return axios.get(`https://getharvest-fake-api.herokuapp.com/projects/${id}`)
}
export const addData=(data)=>{
    return axios.post(`https://getharvest-fake-api.herokuapp.com/projects/`,data)
}
export const updateData=(id,newStatus)=>{
    return axios.patch(`https://getharvest-fake-api.herokuapp.com/projects/${id}`,newStatus)
}
export const deleteData=(id)=>{
    return axios.delete(`https://getharvest-fake-api.herokuapp.com/projects/${id}`)
}
export const filterClient=(c)=>{
    return axios.get(`https://getharvest-fake-api.herokuapp.com/projects/search/?q=${c}`)
}
export const searchBy_Client_Project=(q)=>{
    return axios.get(`https://getharvest-fake-api.herokuapp.com/projects/search/?q=${q}`)
}
