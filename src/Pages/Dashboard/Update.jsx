import React from 'react'
import './Update.css'

const Update = () => {
  return (
    <div className='Update'>
        <h2>UPDATE YOUR STOCK</h2>
        <div className="upBody">
            <input type="text" placeholder='dish Name' />
            <input type="text" placeholder='price' />
            <input type="file"/>
            <textarea></textarea>
        </div>
    </div>
  )
}

export default Update