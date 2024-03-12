import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";
import { MdNoFood } from "react-icons/md";
import  Signup from '../Sign_Up/Signup';
import { MdLogin } from "react-icons/md";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
            <MdNoFood />
              <span className='navbar-brand-text fw-7'>Tasty Hub.</span>
            </Link>
            <div className='navbar-btns flex align-center'>
              <Link to="/Signup" >
              <button
                type="button"
                className="navbar-show-btn text-white flex flex-wrap"
                onClick={() => setShowSignup(true)}
                >
              <MdLogin className="mr-2" />
              <p className="ml-2">Login</p>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar