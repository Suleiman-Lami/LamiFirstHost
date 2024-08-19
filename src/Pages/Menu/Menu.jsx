import React, { useEffect, useState } from 'react';
import './Menu.css';
import food from '../../assets/food.jpg';
import Db from '../../Global/Db.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Global/Slice';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Menu = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  const [menuArray, setMenuArray] = useState([]); 

  useEffect(() => {
    const array = Object.values(Db);
    const foods = array.filter((e) => e.vendor === e.vendor);
    setMenuArray(foods);
    console.log(foods);
  }, [Id]); 

  return (
    <div className='Menupage'>
      <div className='welcomeSms'>Welcome to Papa Obinna kitchen</div>
      <div className="Menuwrap">
        {menuArray?.map((e) => (
          <div className="Card" key={e.id}>
            <div className="cardImg">
              <img src={e.image} alt={e.name} /> 
            </div>
            <div className="cardText">
              <span>Price: {e.price}</span>
              <p>{e.name}</p> 
              <div className="btnHolder">
                <button className='unfilled'>View Detail</button>
                <button onClick={() => dispatch(addToCart(e), toast.success('Successsfully added an item to cart'))}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster/>
    </div>
  );
}

export default Menu;
