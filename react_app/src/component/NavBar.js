import React from 'react'
import{NavLink} from 'react-router-dom'

function NavBar() {
  const navlinkcss = ({isActive}) =>
  {
    return{
      paddingLeft: '20px',
      fontSize : isActive ? '25px' : '20px',
      textDecoration: 'none'
    }
      
  }
  return (
    <div className='nav'>
      <NavLink to="/" style={navlinkcss}>Home</NavLink>
      <NavLink to="/about" style={navlinkcss}>About</NavLink>
      <NavLink to="/contact" style={navlinkcss}>Contact</NavLink>
      <NavLink to="/service" style={navlinkcss}>Services</NavLink>
      <NavLink to="/product" style={navlinkcss}>Product</NavLink>
      <NavLink to="/user" style={navlinkcss}>User</NavLink>
      <NavLink to='/weather' style={navlinkcss}> Weather</NavLink>
    </div>
  )
}

export default NavBar
