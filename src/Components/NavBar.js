import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Stylesheets/Navbar.css'


const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/bookshelves">Bookshelves</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
