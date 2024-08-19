import React from 'react'
import './Orders.css'

const Orders = () => {
  const item = [1,2,3]
  return (
    <div className='Orders'>
      { item.map((e)=>(
        <div className="item">
          
        </div>
      ))}
    </div>
  )
}

export default Orders