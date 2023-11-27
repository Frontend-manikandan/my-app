import React from 'react'
import Slides from '../Images/slide4.jpg';
import './app.css';

export const About = () => {
  return (
    <div className='about'>
       <div className='col-md-4'>
        <ol>
          <li>Food is my love language.</li>
          <li>Indulging in flavors that make life delicious.</li>
          <li>Foodie adventures are the best adventures.</li>
          <li>Feasting my way through life, one bite at a time.</li>
          <li>Food is not just fuel; it's an experience.</li>
          <li>Tasting the world, one dish at a time.</li>
          <li>Bringing the flavor game to a whole new level.</li>
        </ol>
        <div className='row'>
        <img src={Slides} alt='Insert your images'/>
        </div>
       </div>
    </div>
  )
}
