import React from 'react'
import './Cart.css'
import Db from '../../Global/Db.json'
import { useDispatch } from 'react-redux'
import { decreaseQty, inCreaseQty } from '../../Global/Slice'

const Checkout = ({Modal, selectedItem}) => {
    const item =Object.values(Db)
    const dispatch = useDispatch()
    const newData = item.find((e)=> e.vendor == e.id)
  return (
    <div className='Checkout'>
        <div className="Modal">
            <div className="Top"> <span onClick={()=>Modal(false)}>X</span></div>
           <div className="details">
            <h1> CheckOut for: {selectedItem.vendor}</h1>
                <div className="box">
                    <div className="boxImg">
                        <img src={selectedItem.image}/>
                    </div>
                    <div className="des">
                        <h3>{selectedItem.Name}</h3>
                        <span>{selectedItem.price}</span>
                        <span>{selectedItem.description}</span>
                        <div className="btnHolder">
                            <button className='increase' onClick={()=>dispatch(inCreaseQty(selectedItem.id))}>+</button> 
                            <span>{selectedItem.QTY}</span>
                            <button onClick={()=>dispatch(decreaseQty(selectedItem.id))}>-</button>
                        </div>
                    </div>
                </div>
                <select className='paymentBtn'> 
                    <option value="">Choose Payment Method</option>
                    <option value="Pay on Delivery" >Pay on Delivery</option>
                    <option value="Pay on PickUp">Pay on PickUp</option>
                </select>
           </div>
        </div>
    </div>
  )
}

export default Checkout