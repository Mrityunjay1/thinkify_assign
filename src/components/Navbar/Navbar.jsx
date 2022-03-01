import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav_container'>
        <h3>Filters</h3>
        <ul className='nav_ul'>
          <Link to='/'>
          <li>All</li>
          </Link>
            <li>Read</li>
            <li>Unread</li>
            <Link to='/favourites'><li>Favourites</li></Link>
        </ul>
    </div>
  )
}

export default Navbar