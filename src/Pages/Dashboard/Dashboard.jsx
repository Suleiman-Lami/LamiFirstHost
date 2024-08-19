import React, { useState } from 'react'
import './Dashboard.css'
import Header from '../../Components/Header/Header'
import Orders from './Orders'
import Update from './Update'

const Dashboard = () => {
  const [Time, setTime]= useState(0)
  return (
    <div className='dashBoard'>
    <div className="sideBar">
      <h2>La curve</h2>
      <div className="dashBtn">
        <button onClick={()=> setTime(0)}>DashBoard</button>
        <button onClick={()=>setTime(2)}>Update Stock</button>
        <button onClick={()=>setTime(1)}>Check Orders</button>
      </div>
      <button>Log Out</button>
    </div>
    <div className="dashBody">
      <Header/>
      { Time == 0? <span>Dashboard</span>: Time == 1 ? <Orders/>: Time == 2? <Update/>: null}
    </div>
    </div>
  )
}

export default Dashboard