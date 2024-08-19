import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../Global/Slice'

const UserDrop = () => {
  const dispatch=useDispatch()
  return (
    <div className='UserDrop'>
        <li><NavLink to={'/home/homepage'} style={({isActive}) => ({color: isActive? "green": 'black'})}>Home</NavLink></li> 
          <li><NavLink to={'/home/cart'} style={({isActive}) => ({color: isActive? "green": 'black'})}>Cart</NavLink></li>
          <li><NavLink to={'/home/vendors'} style={({isActive}) => ({color: isActive? "green": 'black'})}>Vendor(s)</NavLink></li>
          <button onClick={()=>dispatch(logout())}>Log Out</button>
    </div>
  )
}

export default UserDrop