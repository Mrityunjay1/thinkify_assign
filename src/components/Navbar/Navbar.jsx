import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = React.useState(1)
  const toggle = (index) => setActive(index);
  return (
    <div className='nav_container'>
        <h3>Filters</h3>
        <ul className='nav_ul'>
          <Link to='/'>
          <li className='nav_li' style={active ===1 ? {background:'#E1E4EA' ,width:'100%',borderRadius:'25px',textAlign:'center'}:{}} onClick={()=>toggle(1)}>All</li>
          </Link>
            <li className='nav_li' label='Read'>Read</li>
            <li className='nav_li' >Unread</li>
            <Link to='/favourites'><li className='nav_li' style={active === 2 ? {background:'#E1E4EA',width:'100%',borderRadius:'25px',textAlign:'center'}:{}} onClick={()=>toggle(2)}>Favourites</li></Link>
        </ul>
    </div>
  )
}

export default Navbar