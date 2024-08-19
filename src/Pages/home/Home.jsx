import React from 'react'
import './Home.css'
import food from '../../assets/food.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Nav = useNavigate()
  return (
    <div className='Home'>
      <div className="Wrap">
        <div className="homeText">
          <h1>
            Welcome to La Curve
          </h1>
          <span>A websites here only to satisfy <h3>YOU</h3> hunger no be something wey dem dey use play :)</span>
          <button onClick={()=> Nav('/home/vendors')} >Explore</button>
        </div>
        <div className="homeImg">
          <img src={food}/>
        </div>
      </div>
    </div>
  )
}

export default Home