import React, { useState } from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseQty, inCreaseQty, removeCart } from '../../Global/Slice';
import Checkout from './Checkout';

const Cart = () => {
  const [Modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item details
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);

  const handleCheckoutClick = (item) => {
    setSelectedItem(item); // Store the item details in state
    setModal(true); // Open the modal
  };

  return (
    <div className='Cart'>
      <div className="cartWrap">
        <div className="cartHeader">
          <h3>Quantity: {cart.length}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear cart</button>
          <h3>Amount in Total: {total}</h3>
        </div>
        <div className="cartBody">
          {cart.length === 0 ? (
            <h1>Your Cart is Empty!!! 😢😢</h1>
          ) : (
            cart.map((e) => (
              <div className="cartCard" key={e.id}>
                <div className="cartImg">
                  <img src={e.image} alt={e.dish} />
                </div>
                <div className="cartdes">
                  <h3>{e.dish}</h3>
                  <span>Description</span>
                  <p>{e.price}</p>
                  <div className="cartBtnHolder">
                    <button onClick={() => dispatch(removeCart(e))}>Remove</button>
                    <div className="arith">
                      <button onClick={() => dispatch(inCreaseQty(e.id))}>+</button>
                      {e.QTY}
                      <button className='dull' onClick={() => dispatch(decreaseQty(e.id))} >  - </button>
                    </div>
                  </div>
                  <div className="checkOut">
                    <button onClick={() => handleCheckoutClick(e)}>Checkout</button> 
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {Modal && selectedItem && (
          <Checkout Modal={setModal} cart={cart} selectedItem={selectedItem} />
        )}
      </div>
    </div>
  );
};

export default Cart;
