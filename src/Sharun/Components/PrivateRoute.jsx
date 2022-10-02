import { useAuth0 } from '@auth0/auth0-react'
import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { ProjectData } from '../../Context/ProjectDataContext'

export default function PrivateRoute({children}) {
  const {flag}=useContext(ProjectData)
  const {isAuthenticated}=useAuth0()

 if(!flag){
  return <Navigate to="/signUp"/>
 }
 

 return children
  
  
}
