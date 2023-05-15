import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>this is  contact page</h1>
      <NavLink to='/'>Home</NavLink> <br />
      <NavLink to='/about'>About</NavLink>
    </div>
  )
}

export default Contact
