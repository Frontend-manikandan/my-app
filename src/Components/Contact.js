import React from 'react'
import Swiggy from '../Images/swiggy.jpg';
import Zomato from '../Images/Zomato.jpg';
import Rapido from '../Images/Rapido.jpg';
import Whatsapp from '../Images/Whats.jpg';

const Contact = () => {
  return (
    <div className='col-md-3'>
      <h1>Contact us</h1>
      <p>Mobile No:234567890</p>
      <p>Email:www.chat$item website.com</p>
      <div className='const'>
      <img src={Swiggy}/>
      <img src={Zomato}/>
      <img src={Rapido}/>
      <img src={Whatsapp}/>
      </div>
    </div>
  )
}

export default Contact