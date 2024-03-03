import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../src/assets/images/Goldfont.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Discover">About Us</Link>
        <Link to="/">Partners</Link>
        <Link to="/">Services</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact Us</Link>
      </div>
    </nav>
  )
}

export default NavBar
