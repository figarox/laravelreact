import React from 'react'
import '../Style/dashboard.css'
import Navbar from '../Layouts/Navbar'
import { useStateContext } from '../Contexts/ContextProvider'
import { Navigate } from 'react-router-dom';


export default function Dashboard() {

const { currentUser , userToken } = useStateContext();

  if(!userToken) {
    return <Navigate to='/'/>
  }

  return (
    <div className='body'>
      <Navbar/>
    </div>
    
  )
}
