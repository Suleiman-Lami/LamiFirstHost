import React, { useEffect, useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {buyersLogin } from '../../Global/Slice'

const Login = () => {

  const dispatch = useDispatch()
  const Nav = useNavigate();
  const isLoggedin=useSelector((state)=>state.loginIn);  

    const Users = z.object({
      email: z.string({message: 'Check your email'}),
      password: z.string({message: 'must be a string'}).min(5, {message: 'must be more than 5'}).regex(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {message: "must contain a special character"})
    })
    const {register, handleSubmit, formState: {errors}, setError} = useForm({
      resolver: zodResolver(Users),
    });

    const onSubmit =(data)=>{
      dispatch(buyersLogin(data))
      console.log(data);   
      // if (isLoggedin) {
        Nav('/home/homepage')
      // }  
    }
    // useEffect(() => {
     
    // }, [isLoggedin])
    
  
  return (
    <div className='Login'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <h1>Login</h1>
    <h4>Email</h4>
    <input type="email"  placeholder='Example@gmail.com' required={true} {...register ('email')}/>
    {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
    <h4> Password</h4>
    <input type="password" name='password' placeholder='******'required={true} {...register ('password')} />
    {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
      <div className="Holder">
      <button type='submit'>Login</button>
      </div>
      <span>Do not have an Account? <p onClick={()=> Nav('/signUp')}>Sign Up</p></span>
    </form>

    </div>
  )
}

export default Login