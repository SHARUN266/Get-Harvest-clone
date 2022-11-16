import axios from 'axios';
export const getData=()=>{
    return axios.get(`https://toga-caterpillar.cyclic.app/projects`)
}
export const getDataById=(id)=>{
    return axios.get(`https://toga-caterpillar.cyclic.app/projects/${id}`)
}
export const addData=(data)=>{
    return axios.post(`https://toga-caterpillar.cyclic.app/projects/`,data)
}
export const updateData=(id,newStatus)=>{
    return axios.patch(`https://toga-caterpillar.cyclic.app/projects/${id}`,newStatus)
}
export const deleteData=(id)=>{
    return axios.delete(`https://toga-caterpillar.cyclic.app/projects/${id}`)
}
export const filterClient=(c)=>{
    return axios.get(`https://toga-caterpillar.cyclic.app/projects/search/?q=${c}`)
}
export const searchBy_Client_Project=(q)=>{
    return axios.get(`https://toga-caterpillar.cyclic.app/projects/search/?q=${q}`)
}
