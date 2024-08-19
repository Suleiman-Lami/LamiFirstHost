import React, { useState } from 'react'
import './Header.css'
import { RiMenuSearchFill } from "react-icons/ri";
import {NavLink, useNavigate } from 'react-router-dom'
import UserDrop from './UserDrop';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Global/Slice';

const Header = () => {
  const{ cart} = useSelector((state)=>state.cart)
  const [userDrop, setUserDrop] = useState(false)
  const dispatch=useDispatch()
  const logoutAction=()=>{
    dispatch(logout())
  }
  return (
    <div className='Header'>
      <div className="HeaderWrap">
        <div className="Logo">La Curve</div>
        <nav>
          <li><NavLink to={"/home/homepage"} style={({isActive}) => ({color: isActive? "green": 'white'})}>Home</NavLink></li> 
          <li><NavLink to={'/home/cart'} style={({isActive}) => ({color: isActive? "green": 'white'})}>Cart({cart.length})</NavLink></li>
          <li><NavLink to={'/home/vendors'} style={({isActive}) => ({color: isActive? "green": 'white'})}>Vendor(s)</NavLink></li>
          <li onClick={logoutAction}>Logout</li>
        </nav>
        <div className="Account">
          account
        </div>
        <div className="Menu">
        <RiMenuSearchFill size={25} color='white' onClick={()=>setUserDrop(!userDrop)}/>
                        {
                                userDrop ?
                            <div className='UserDropContainer'>
                                <UserDrop/>
                            </div>: null
                        }
        </div>
      </div>
    </div>
  )
}

export default Header