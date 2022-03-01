import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='nav_container'>
        <h3>Filters</h3>
        <ul className='nav_ul'>
          <Link to='/'>
          <li className='nav_li'>All</li>
          </Link>
            <li className='nav_li'>Read</li>
            <li className='nav_li' >Unread</li>
            <Link to='/favourites'><li className='nav_li' style={toggle &&{background:'red'}}>Favourites</li></Link>
        </ul>
    </div>
  )
}

export default Navbar