import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='hero'>
       <div className="banner">   
         <h1>Volunteer with Us</h1>                                         
         <h3>Needed</h3>
         <p>At Donation Crypto Gateway, we believe in the power of digital currencies to drive change and make a difference. Whether you're supporting a cause close to your heart or helping those in need, our platform allows you to contribute seamlessly using the most popular cryptocurrencies.</p>
         <Link to={"/donate"} className='btn'>Donate Now</Link>
 </div>  
 <div className='banner'>
   <img src="/hero.png" alt="hero" />
</div>                                      
    </section>
  )
}

export default Hero