import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
// import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Button } from "@mui/material";
// import Stack from "@mui/material/Stack";
import { FaEnvelopeOpen} from "react-icons/fa";
import {BsXLg} from 'react-icons/bs'
import "./css/Navbar.css"
import "../App.css"
import "../index.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
    <nav className="app__navbar">
    <div className="app__navbar-logo">
      <FaEnvelopeOpen style={{color:'#9659f8',fontSize:'30px'}}/><h3 style={{fontSize:'25px'}}>Estatery</h3>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Rent</a></li>
      <li className='p__opensans'><a href="#about">Buy</a></li>
      <li className='p__opensans'><a href="#menu">Sell</a></li>
      <li className='p__opensans'><a href="#awards">Manage</a></li>
      <li className='p__opensans'><a href="#contact">Resources</a></li>
    </ul>
    <div className='app__navbar-login'>
     <Button style={{marginRight:'20px',color:'#9659f8'}} variant="outlined">Log In</Button>
     <Button variant="secondary" style={{background:'#9659f8',color:'white'}}>Sign up</Button>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#000" fontSize={27} onClick={()=>setToggleMenu(true)} />

      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <BsXLg fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)} />
      <ul className='app__navbar-smallscreen-links'>
      <li className='p__opensans'><a href="#home">Rent</a></li>
      <li className='p__opensans'><a href="#about">Buy</a></li>
      <li className='p__opensans'><a href="#menu">Sell</a></li>
      <li className='p__opensans'><a href="#awards">Manage</a></li>
      <li className='p__opensans'><a href="#contact">Resources</a></li>
      <li className='p__opensans'><a href="#contact">Log In</a></li>
      <li className='p__opensans'><a href="#contact">Sign Up</a></li>
    </ul>
    </div>
      )}

    </div>
  </nav>
      </>
  );
};

export default Navbar;
