import React from 'react'
import { children } from 'react'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout/Layout'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import Home from './Pages/home/Home'
import Vendor from './Pages/vendor/Vendor'
import Menu from './Pages/Menu/Menu'
import Cart from './Pages/cart/Cart'
import Dashboard from './Pages/Dashboard/Dashboard'

const router = createHashRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: 'signUp',
      element: <SignUp/>
    },
    {  path: 'dashboard',
      element: <Dashboard/>
    },
    {
      path: '/home',
      element: <Layout/>,
      children: [
      {  path: 'homepage',
        element: <Home/>
      },
      {  path: 'vendors',
        element: <Vendor/>
      },
      {  path: 'cart',
        element: <Cart/>
      },
      {  path: 'Menu/:id',
        element: <Menu/>
      },
      ]
    },
   
])

const App = () => {
  return (
   <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
  )
}

export default App