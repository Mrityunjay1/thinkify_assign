import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav_container'>
        <h3>Filters</h3>
        <ul className='nav_ul'>
            <li>All</li>
            <li>Read</li>
            <li>Unread</li>
        </ul>
    </div>
  )
}

export default Navbar