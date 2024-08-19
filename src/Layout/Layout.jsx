import React from 'react'
import './Layout.css'
import Header from '../Components/Header/Header'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
const {isLoggedIn}=useSelector((state)=>state.cart.loginIn)
console.log(isLoggedIn,"logout")
  return (
    <>
    {
      isLoggedIn?
      <div className='Layout'>
      <Header/>
      <Outlet/>
  </div>:<Navigate to="/" replace={true}/>
    }
    </>
 
  )
}

export default Layout