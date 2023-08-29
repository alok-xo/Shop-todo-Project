import React from 'react'
import './Navstyles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ol>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/todo'>Todo</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ol>
      </nav>
    </>
  )
}

export default Navbar
