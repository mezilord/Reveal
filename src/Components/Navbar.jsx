import React, { useState } from 'react'
import '../App.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../src/assets/images/Goldfont.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Partners</a>
        <a href="/contact">Services</a>
        <a href="/contact">Blog</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  )
}

export default NavBar
