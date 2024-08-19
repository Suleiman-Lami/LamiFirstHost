import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Global/Slice'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUp = () => {

  const User = z.object({
    username: z.string(),
    email: z.string().email({message: 'must be a valid email'}),
    role: z.string(),
    password: z.string({message: 'must be a string'}).min(5, {message: 'must be more than 5'}).regex(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {message: "must contain a special character"})
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const Nav = useNavigate()
  const dispatch = useDispatch()
  const [userData, setUserDate]= useState({})

  const Onsubmit = async(data)=>{
    console.log("SuCCESS", data);
    dispatch(signUp(data))
    Nav('/')
  }

  return (
    <div className='SignUp'>
    <form onSubmit={handleSubmit (Onsubmit)}>
    <h1>Create an Account</h1>
    <label>UserName</label>
    <input type="UserName"  placeholder='UserName' {...register ("username")} />
    {errors.username && <span style={{color: 'red'}}>{errors.username.message}</span>}
    <label>Email </label>
    <input type="email" name='email' placeholder='Example@gmail.com' {...register ("email")}  />
     {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
    <label> Are you a Vendor or a Buyer? </label>
    <input type="Occupation" name='Occupation' placeholder='Vendor/Buyer' {...register ("role")} />
      {errors.role && <span style={{color: 'red'}}>{errors.role.message}</span>}
    
    <label> Password</label>
    <input type="password" name='password' placeholder='******' {...register ("password")} />
      {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
  
   
      <div className="btnHolder">
      <button type='submit'>Sign Up</button>
      </div>
      <span>Already have an Account? <p onClick={()=> Nav('/')}>Sign Up</p></span>
    </form>
    </div>
  )
}
 
export default SignUp