import React from 'react'
import { FaSquareTwitter , FaSquareInstagram,FaYoutube,FaLinkedin} from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <footer>
    <div><img src="/logo.png" alt="logo" /></div>

    <div>
      <h4>Support</h4>
      <ul>
        <li>New York ,USA</li>
        <li>crypto@gmail.com</li>
        <li>+91 983345564</li>

      </ul>
    </div>

    <div>
      <h4>Quick Links</h4>
      <ul>
        <li> <Link to={"/"}>Home</Link> </li>
          <li> <Link to={"/donate"}>Donate</Link></li>
          <li> <Link to={"about"}> About</Link></li>
          <li><Link to ={"/contact"}>Contact</Link></li>
      </ul>
    </div>

    <div>
      <h4>Follow Us</h4>
   <ul>
    <li>
      <Link to={"/"}><span><FaSquareTwitter/> </span> Twitter (x)<span></span></Link>
    </li>

    <li>
      <Link to={"/"}><span> <FaYoutube/> </span> Youtube  <span></span></Link>
    </li>

    <li>
      <Link to={"/"}><span> <FaSquareInstagram/> </span> Instagram <span></span></Link>
    </li>

    <li>
      <Link to={"/"}><span><FaLinkedin/> </span> Linkedin<span></span></Link>
    </li>

    <li>
      <Link to={"/"}><span> </span></Link>
    </li>


   </ul>
    </div>

    
   </footer>
  )
}

export default Footer