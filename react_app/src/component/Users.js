import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Users() {
  return (
    <>
    <div>
      <h1>Welcome to Users Component</h1>
      <nav>
      <h2><NavLink to={'1'}>User1</NavLink></h2>
      <h2><NavLink to={'2'} > User2</NavLink></h2>
      <h2><NavLink to={'3'} > User3</NavLink></h2>
      </nav>
      
    </div>
    <Outlet/>
    </>
    
  )
}

export default Users
