import React from 'react'
import './Orders.css'

const Orders = () => {
  const item = [1,2,3]
  return (
    <div className='Orders'>
      { item.map((e)=>(
        <div className="item">
         <div className="orderHead">
           <h4>Amount: 1200</h4>
          <span>Qty: 2</span>
         </div>
          <div className="Circle"><img src="" alt="" /></div>
          <span>Dish Name</span>
          <div className="itemBody">
            <span>Customer Name</span>
            <span>Address</span>
              <h4>Extra Demand</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders